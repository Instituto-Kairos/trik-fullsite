const aliases = {
    home: "home",
    sistema: "sistema",

    abraamico: "kanones/abraamico/dominio-abraamico",
    "abraamico/domus-sancta": "kanones/abraamico/domus-sancta",
    "abraamico/registros-abraamico": "kanones/abraamico/registros-abraamico",

    "romano/nova-roma": "kanones/romano/nova-roma",

    "indigena-br": "kanones/indigena-br/dominio-indigena",

    egipcio: "kanones/egipcio/dominio-egipcio",

    "indigena/kanirenda-ikaraipyre": "kanones/indigena-br/kanirenda-ikaraipyre"
};

export function getCurrentPage() {
    const params = new URLSearchParams(window.location.search);

    const requestedPage = params.get("page");

    if (!requestedPage) {
        return "home";
    }

    return aliases[requestedPage] || "home";
}
