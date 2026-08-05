import { execSync } from "child_process";

export function getLastModified(file) {
    try {
        return execSync(
            `git log -1 --format=%cs "${file}"`,
            { encoding: "utf8" }
        ).trim();

    } catch {
        // Caso o arquivo ainda não tenha commits
        return new Date().toISOString().split("T")[0];
    }
}