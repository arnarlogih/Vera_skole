// const baseLink = 'http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed';

// document.addEventListener("DOMContentLoaded", start);

// function start() {
//     async function getJson() {
//         let url("http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed");
//         let jsonData = await fetch(url);

//     }
// }





// ANTON LINI CODE

const baseLink = 'http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed';

const template = document.querySelector('template').content;
const parent = document.querySelector('.musicContainer');

function loadData(link) {
    fetch(link)
        .then(e => e.json())
        .then(data => show(data));
}

function show(data) {
    data.forEach(data => {
        //console.log(data);

        const clone = template.cloneNode(true);
        const artwork = clone.querySelector('div img');
        const trackLink = clone.querySelector('a');
        const trackTitle = clone.querySelector('.songTitle');
        const trackDate = clone.querySelector('.songDate');

        //Sending to subpage
        trackLink.href = 'track.html?id=' + data.id;

        artwork.src =
            data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

        trackTitle.textContent = data.title.rendered;
        // trackDate.textContent = data.date;

        parent.appendChild(clone);
    });
}

loadData(baseLink);