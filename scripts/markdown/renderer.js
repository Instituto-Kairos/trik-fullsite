export function renderMarkdown(markdown) {

    const html = marked.parse(markdown);

    document.getElementById("content").innerHTML = html;
}