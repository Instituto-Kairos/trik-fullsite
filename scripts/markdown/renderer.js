export function renderMarkdown(
    headerMarkdown,
    contentMarkdown
) {

    document.getElementById("header").innerHTML =
        marked.parse(headerMarkdown);

    document.getElementById("content").innerHTML =
        marked.parse(contentMarkdown);
}