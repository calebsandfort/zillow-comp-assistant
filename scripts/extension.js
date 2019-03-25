document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('changelinks');
    button.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(urls){
                var urlsDiv = $("#urlsDiv");
                urlsDiv.append(urls.join(", "));
            });
        });
    });

    var clipboard = new ClipboardJS('#copy');
});

