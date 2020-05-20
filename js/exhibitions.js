const baseLink = 'http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed';

document.addEventListener("DOMContentLoaded", start);

function start() {
    async function getJson() {
        let url("http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed");
        let jsonData = await fetch(url);

    }
}