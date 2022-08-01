function reddenPage() {
  document.getElementById("col1").remove();
  document.getElementById("col2").remove();
  document.getElementById("header").remove();
  document.getElementById("page_margins").style["max-width"] = "123em";

  document.getElementById("col3").style["margin-right"] = "0";
  document.getElementById("col3").style["margin-left"] = "0";
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("https://onlinejudge.org/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
