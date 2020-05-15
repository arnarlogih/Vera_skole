const baseLink = 'http://localhost:8888/wp-json/wp/v2/exhibitions?_embed';

document.addEventListener("DOMContentLoaded", start);

function start() {
    async function getJson() {
        let url("http://localhost:8888/wp-json/wp/v2/exhibition");
        let jsonData = await fetch(url);

    }
}