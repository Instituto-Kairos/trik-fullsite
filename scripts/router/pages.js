export const pages = {
    home: {
        file: "home",
        title: "Página Inicial"
    },

    sistema: {
        file: "sistema",
        title: "Sistema"
    },

    abraamico: {
        file: "kanones/abraamico/dominio-abraamico",
        title: "Domínio Abraâmico"
    },

    "abraamico/domus-sancta": {
        file: "kanones/abraamico/domus-sancta",
        title: "Domus Sancta — Domínio Abraâmico"
    },

    "abraamico/tomo-abraamico": {
        file: "kanones/abraamico/tomo-abraamico",
        title: "Tomo Abraâmico — Domínio Abraâmico"
    },

    romano: {
        file: "kanones/romano/dominio-romano",
        title: "Domínio Romano"
    },

    "romano/nova-roma": {
        file: "kanones/romano/nova-roma",
        title: "Nova Roma — Domínio Romano"
    },

    "indigena-br": {
        file: "kanones/indigena-br/dominio-indigena",
        title: "Domínio Indígena Brasileiro"
    },

    egipcio: {
        file: "kanones/egipcio/dominio-egipcio",
        title: "Domínio Egípcio"
    },

    "indigena/kanirenda-ikaraipyre": {
        file: "kanones/indigena-br/kanirenda-ikaraipyre",
        title: "Kanirenda Ikaraipyre — Domínio Indígena Brasileiro"
    },

    chinesa: {
        file: "kanones/chines/dominio-chines",
        title: "Domínio Chinês"
    },

    celta: {
        file: "kanones/celta/dominio-celta",
        title: "Domínio Celta"
    },

    covens: {
        file: "kanones/celta/covens",
        title: "Covens — Domínio Celta"
    },

    // primordial: {
    //     file: "spoilers",
    //     title: "👁️"
    // }
};

export function getRoutes() {
    return Object.keys(pages);
}