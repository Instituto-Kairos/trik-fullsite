import { pages } from "./router/pages.js";
import fs from "fs";

const BASE_URL =
    "https://docs.rpg-institutokairos.org";

const urls = Object.keys(pages);

const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.map(route => `

    <url>
        <loc>${
            route === "home"
                ? BASE_URL
                : `${BASE_URL}/?page=${route}`
        }</loc>
    </url>

`).join("")}

</urlset>
`;

fs.writeFileSync(
    "sitemap.xml",
    xml
);

console.log("✅ sitemap.xml gerado!");