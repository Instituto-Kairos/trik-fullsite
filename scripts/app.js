import { getCurrentPage } from "./markdown/router.js";
import { loadMarkdown } from "./markdown/loader.js";

const currentPage = getCurrentPage();

loadMarkdown(currentPage);