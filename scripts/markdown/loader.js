import { renderMarkdown } from "./renderer.js";

export async function loadMarkdown(page) {

    const path = `docs/kanones/${page}.md`;

    try {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error("Markdown não encontrado");
        }

        const markdown = await response.text();

        const parts = markdown.split("<!-- CONTENT -->");

        const headerMarkdown =
            parts[0]?.trim() || "";

        const contentMarkdown =
            parts.length > 1
                ? parts.slice(1).join("<!-- CONTENT -->").trim()
                : "";

        renderMarkdown(
            headerMarkdown,
            contentMarkdown
        );

    } catch(error) {

        console.error(error);

        const headerElement =
            document.getElementById("header-content");

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