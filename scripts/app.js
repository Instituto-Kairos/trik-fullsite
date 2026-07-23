import { getCurrentPage } from "./router/index.js";
import { loadMarkdown } from "./markdown/loader.js";

const page = getCurrentPage();

document.title = page.title;

loadMarkdown(page);