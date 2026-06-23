import { renderMarkdown } from "./renderer.js";

/* -------------------------------- */
/* ---------------- REGEX --------- */
/* -------------------------------- */

const REGEX = {

    ANEDOTA:
        /<!-- ANEDOTA -->([\s\S]*?)<!-- \/ANEDOTA -->/g,

    FOOTER:
        /<!-- FOOTER -->([\s\S]*)$/s,

    PAINEL_PRINCIPAL:
        /<!--\s*PAINEL\s+principal(?:\s+(row|col))?\s*-->([\s\S]*?)<!--\s*\/PAINEL\s+principal(?:\s+(?:row|col))?\s*-->/g,

    PAINEL_FILHO:
        /<!--\s*PAINEL\s+([a-zA-Z0-9-\s]+)\s*-->([\s\S]*?)<!--\s*\/PAINEL\s+\1\s*-->/g
};

/* -------------------------------- */
/* ------------ LOADER ------------ */
/* -------------------------------- */

export async function loadMarkdown(page) {

    const path =
        `docs/${page}.md`;

    try {

        const response =
            await fetch(path);

        if (!response.ok) {
            throw new Error(
                "Markdown não encontrado"
            );
        }

        const markdown =
            await response.text();

        const parts =
            markdown.split(
                "<!-- CONTENT -->"
            );

        const headerMarkdown =
            parts[0]?.trim() || "";

        let contentMarkdown =
            parts.length > 1
                ? parts
                    .slice(1)
                    .join("<!-- CONTENT -->")
                    .trim()
                : "";

        contentMarkdown =
            parseComponents(
                contentMarkdown
            );

        renderMarkdown(
            headerMarkdown,
            contentMarkdown
        );

    } catch (error) {

        console.error(error);

        render404();
    }
}

/* -------------------------------- */
/* -------- COMPONENT PIPE -------- */
/* -------------------------------- */

function parseComponents(markdown) {

    const parsers = [

        parseAnedotas,

        parsePainel,

        parseFooter
    ];

    for (const parser of parsers) {

        markdown =
            parser(markdown);
    }

    return markdown;
}

/* -------------------------------- */
/* ------------ HELPERS ----------- */
/* -------------------------------- */

function wrapDiv(
    className,
    content
) {

    return `
<div class="${className}">

${content.trim()}

</div>
`;
}

function render404() {

    const headerElement =
        document.getElementById(
            "header"
        );

    const contentElement =
        document.getElementById(
            "content"
        );

    if (headerElement) {
        headerElement.innerHTML = "";
    }

    if (contentElement) {

        contentElement.innerHTML = `
<h1>404</h1>
<p>Página não encontrada.</p>
`;
    }
}

/* -------------------------------- */
/* ------------ ANEDOTA ----------- */
/* -------------------------------- */

function parseAnedotas(markdown) {

    return markdown.replace(

        REGEX.ANEDOTA,

        (_, content) => {

            const lines =
                content
                    .trim()
                    .split("\n");

            let title =
                "Anedota";

            const firstLine =
                lines[0]?.trim();

            if (

                firstLine.startsWith("[") &&
                firstLine.endsWith("]")

            ) {

                title =
                    firstLine.slice(
                        1,
                        -1
                    );

                lines.shift();
            }

            const body =
                lines.join("\n");

            return `
<details class="anedota">

<summary>${title}</summary>

${body}

</details>
`;
        }
    );
}

/* -------------------------------- */
/* ------------ FOOTER ------------ */
/* -------------------------------- */

function parseFooter(markdown) {

    return markdown.replace(

        REGEX.FOOTER,

        (_, content) =>
            wrapDiv(
                "footer",
                content
            )
    );
}

/* -------------------------------- */
/* ------------ PAINEL ------------ */
/* -------------------------------- */

function parsePainel(markdown) {

    return markdown.replace(

        REGEX.PAINEL_PRINCIPAL,

        (_, direction = "row", principalContent) => {

            validatePainelPrincipal(
                principalContent
            );

            const children =
                principalContent.replace(

                    REGEX.PAINEL_FILHO,

                    (
                        _,
                        className,
                        content
                    ) =>

                        wrapDiv(
                            `painel ${className}`,
                            content
                        )
                );

            return wrapDiv(
                `painel principal ${direction}`,
                children
            );
        }
    );
}

/* -------------------------------- */
/* ---------- VALIDATIONS --------- */
/* -------------------------------- */

function validatePainelPrincipal(
    content
) {

    if (

        content.includes(
            "<!-- PAINEL principal -->"
        )

    ) {

        throw new Error(
            "PAINEL principal não pode ser filho de outro PAINEL principal."
        );
    }
}