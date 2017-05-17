chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content2.js" });
  });
});
