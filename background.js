const CONTEXT_MENU_ID = "search-with-chatgpt";
const CONTEXT_MENU_TITLE = "Buscar con ChatGPT";

function createContextMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: CONTEXT_MENU_ID,
      title: CONTEXT_MENU_TITLE,
      contexts: ["selection"]
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  createContextMenu();
});

chrome.runtime.onStartup.addListener(() => {
  createContextMenu();
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }

  const selectedText = info.selectionText?.trim();
  if (!selectedText) {
    return;
  }

  const query = encodeURIComponent(selectedText);
  chrome.tabs.create({
    url: `https://chatgpt.com/?q=${query}`
  });
});
