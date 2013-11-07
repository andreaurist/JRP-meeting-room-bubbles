jQuery(document).ready(function () {
    // alert("HERE");

    var bodyClass = jQuery("body").attr("class").toLowerCase();
    var newLinkLocation = "";

    if (bodyClass.indexOf("miami") > 0) {
        newLinkLocation = "/miami";
        jQuery("header h1#logo a").attr("href", newLinkLocation);
    }
    else if (bodyClass.indexOf("chicago") > 0) {
        newLinkLocation = "/chicago";
        jQuery("header h1#logo a").attr("href", newLinkLocation);
    }
    else if (bodyClass.indexOf("ny") > 0) {
        newLinkLocation = "/new-york";
        jQuery("header h1#logo a").attr("href", newLinkLocation);
    }

    jQuery("div.map_container span.point").denihanImageMap();
});