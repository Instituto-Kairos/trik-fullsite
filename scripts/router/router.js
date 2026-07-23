import { pages } from "./pages.js";

export function getCurrentRoute() {

    const path =
        window.location.pathname
            .replace(/^\/|\/$/g, "");

    return path || "home";
}


export function getCurrentPage() {

    const route = getCurrentRoute();

    return pages[route] ?? pages.home;

}