chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "clickNext") {
        $(".zsg-pagination-next > a")[0].click();
        sendResponse({
            action: request.action
        });
    } else if (request.action == "extract") {
        var urls = [];

        $("a.list-card-link").each(function () {
            urls.push($(this).attr("href"));
        });

        sendResponse({
            urls: urls,
            clickNext: $(".zsg-pagination-next").size() > 0,
            action: request.action
        });
    }
});

