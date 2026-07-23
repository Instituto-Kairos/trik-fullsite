import { pages } from "./pages.js";

export function getCurrentRoute() {
    const params = new URLSearchParams(window.location.search);

    return params.get("page") || "home";
}


export function getCurrentPage() {

    const route = getCurrentRoute();

    return pages[route] ?? pages.home;

}