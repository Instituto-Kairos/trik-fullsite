export function renderMarkdown(
    headerMarkdown,
    contentMarkdown
) {

    document.getElementById("header").innerHTML =
        marked.parse(headerMarkdown);

    document.getElementById("content").innerHTML =
        marked.parse(contentMarkdown);

    document
        .querySelectorAll("#content h2")
        .forEach(h2 => {

            const id = h2.textContent
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-");

            h2.id = id;

            h2.innerHTML =
                `<a href="#${id}">${h2.innerHTML}</a>`;
        });

        const hash =
    window.location.hash;

if (hash) {

    const target =
        document.querySelector(hash);

    if (target) {

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
}