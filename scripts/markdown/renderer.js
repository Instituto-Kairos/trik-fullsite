export function renderMarkdown(
    headerMarkdown,
    contentMarkdown
) {

    document.getElementById("header").innerHTML =
        marked.parse(headerMarkdown);

    const content =
        document.getElementById("content");

    content.innerHTML =
        marked.parse(contentMarkdown);

    // Envolve todas as tabelas em um wrapper
    content.querySelectorAll("table").forEach(table => {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "table-wrapper";

        table.parentNode.insertBefore(
            wrapper,
            table
        );

        wrapper.appendChild(table);
    });

    content
        .querySelectorAll("h2")
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