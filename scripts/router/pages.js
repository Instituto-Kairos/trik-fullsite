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
        title: "Domus Sancta"
    },

    "abraamico/tomo-abraamico": {
        file: "kanones/abraamico/tomo-abraamico",
        title: "Tomo Abraâmico"
    },

    romano: {
        file: "kanones/romano/dominio-romano",
        title: "Domínio Romano"
    },

    "/romano/nova-roma": {
        file: "kanones/romano/nova-roma",
        title: "Nova Roma"
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
        title: "Kanirenda Ikaraipyre"
    }
};

export function getRoutes() {
    return Object.keys(pages);
}