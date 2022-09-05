function reddenPage() {
  if (window.sessionStorage.getItem("declutterOnlineJudge") == "yes") {
    window.sessionStorage.setItem("declutterOnlineJudge", "no");
    document.getElementById("col1").style["display"] = "block";
    document.getElementById("col2").style["display"] = "block";
    document.getElementById("header").style["display"] = "block";
    document.getElementById("page_margins").style["max-width"] = "80em";

    document.getElementById("col3").style["margin-right"] = "20%";
    document.getElementById("col3").style["margin-left"] = "20%";
    document
      .getElementById("col3_content_wrapper")
      .querySelector("iframe").style["height"] = "80vh";
  } else {
    window.sessionStorage.setItem("declutterOnlineJudge", "yes");
    document.getElementById("col1").style["display"] = "none";
    document.getElementById("col2").style["display"] = "none";
    document.getElementById("header").style["display"] = "none";
    document.getElementById("page_margins").style["max-width"] = "123em";

    document.getElementById("col3").style["margin-right"] = "0";
    document.getElementById("col3").style["margin-left"] = "0";
    document
      .getElementById("col3_content_wrapper")
      .querySelector("iframe").style["height"] = "100vh";
  }
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  console.log(url);
  window.sessionStorage("declutterOnlineJudge", "yes");
  window;
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("https://onlinejudge.org/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
