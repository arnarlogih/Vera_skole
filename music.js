const baseLink = 'https://juliabaldvins.com/anton/wp-json/wp/v2/music?_embed';

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

        //Sending to subpage
        trackLink.href = 'track.html?id=' + data.id;

        artwork.src =
            data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

        trackTitle.textContent = data.title.rendered;

        parent.appendChild(clone);
    });
}

loadData(baseLink);