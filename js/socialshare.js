setShareLinks();

function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    // Setting 'params' to an empty string will launch
    // content in a new tab or window rather than a pop-up.
    // params = "";
    window.open(url, "NewWindow", params);
}

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);


    $(".social-share.facebook").on("click", function () {
        url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        socialWindow(url);
    });

    $(".social-share.linkedin").on("click", function () {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
        socialWindow(url);
    })
}