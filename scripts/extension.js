document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('changelinks');
    button.addEventListener('click', function () {
        sendRequest({action: 'extract'});
    });

    var clipboard = new ClipboardJS('#copy');
});

function sendRequest(request){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, request, handleResponse);
    });
}

function handleResponse(response) {
    if (response.action == "clickNext") {
        setTimeout(function () {
            sendRequest({action: 'extract'});
        }, 2000);
    } else if (response.action == "extract") {
        var urlsDiv = $("#urlsDiv");
        urlsDiv.append(response.urls.join(", "));
        if(response.clickNext){
            urlsDiv.append(", ");
            sendRequest({action: 'clickNext'});
        }
        else{
            $("#copy").click();
        }
    }
}

