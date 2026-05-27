import { renderMarkdown } from "./renderer.js";

export async function loadMarkdown(page) {
    const path = `docs/${page}.md`;

    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Markdown não encontrado");
        }
        const markdown = await response.text();
        
        renderMarkdown(markdown);
    } catch(error) {
        console.error(error);
        document.getElementById("content").innerHTML = `
            <h1>404</h1>
            <p>Página não encontrada.</p>
        `;
    }
}