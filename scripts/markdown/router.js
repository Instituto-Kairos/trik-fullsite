const aliases = {
    home: "home",

    abraamico: "kanones/abraamico/dominio-abraamico",
    "abraamico/domus-sancta": "kanones/abraamico/domus-sancta",
    "romano/nova-roma": "kanones/romano/nova-roma",

    "indigena-br": "kanones/indigena-br/dominio-indigena",

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
