export function getCurrentPage() {

    const params = new URLSearchParams(window.location.search);

    return params.get("page") || "home";
}