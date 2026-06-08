import { getCurrentPage } from "./markdown/router.js";
import { loadMarkdown } from "./markdown/loader.js";

const currentPage = getCurrentPage();
console.log("");

loadMarkdown(currentPage);