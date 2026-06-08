import { renderMarkdown } from "./renderer.js";

export async function loadMarkdown(page) {

    const path = `docs/kanones/${page}.md`;

    try {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error("Markdown não encontrado");
        }

        const markdown = await response.text();

        const parts =
            markdown.split("<!-- CONTENT -->");

        const headerMarkdown =
            parts[0]?.trim() || "";

        let contentMarkdown =
            parts.length > 1
                ? parts.slice(1).join("<!-- CONTENT -->").trim()
                : "";

        contentMarkdown =
            parseAnedotas(contentMarkdown);

        contentMarkdown =
            parseFooter(contentMarkdown);

        renderMarkdown(
            headerMarkdown,
            contentMarkdown
        );

    } catch(error) {

        console.error(error);

        const headerElement =
            document.getElementById("header");

        const contentElement =
            document.getElementById("content");

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
}

function parseAnedotas(markdown) {

    return markdown.replace(
        /<!-- ANEDOTA -->([\s\S]*?)<!-- \/ANEDOTA -->/g,
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
                    firstLine
                        .slice(1, -1);

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

function parseFooter(markdown) {

    return markdown.replace(
        /<!-- FOOTER -->([\s\S]*)$/s,
        (_, content) => `
<div class="footer">

${content.trim()}

</div>
`
    );
}