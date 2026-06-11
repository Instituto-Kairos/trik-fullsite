const aliases = {
    home: "home",

    abraamico: "kanones/abraamico/dominio-abraamico",
    "abraamico/domus-sancta": "kanones/abraamico/domus-sancta",

    tupi: "kanones/tupi/dominio-tupi",

    egipcio: "kanones/egipcio/dominio-egipcio"
};

export function getCurrentPage() {
    const params = new URLSearchParams(window.location.search);

    const requestedPage = params.get("page");

    if (!requestedPage) {
        return "home";
    }

    return aliases[requestedPage] || "home";
}
