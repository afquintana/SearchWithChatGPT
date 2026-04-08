chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search-with-chatgpt",
    title: "Buscar en ChatGPT",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "search-with-chatgpt" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    chrome.tabs.create({
      url: `https://chatgpt.com/?q=${query}`
    });
  }
});
