chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var data = request.data || {};

    var urls = [];

    $("a.hdp-link").each(function () {
       urls.push($(this).attr("href"));
    });

    sendResponse(urls);
});

