const baseLink = 'http://arnarlogih.com/vera/kea/wp-json/wp/v2/exhibition?_embed';

const template = document.querySelector('template').content;
const parent = document.querySelector('.eventContainer');

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
        const eventTitle = clone.querySelector('.eventTitle');
        const eventDate = clone.querySelector('.eventDate');

        //Sending to subpage
        trackLink.href = 'track.html?id=' + data.id;

        artwork.src =
            data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

        eventTitle.textContent = data.event_title;
        eventDate.textContent = data.event_date;

        parent.appendChild(clone);
    });
}

loadData(baseLink);