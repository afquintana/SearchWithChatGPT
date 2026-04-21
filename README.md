# Search With ChatGPT

A lightweight Chrome extension that adds a **"Search with ChatGPT"** option to the context menu when you select text on any webpage.

## Features

- Adds a simple right-click menu action for selected text.
- Works on any website where text can be selected.
- Opens ChatGPT in a new tab with the selected text pre-filled as a query.
- No custom backend, no user accounts, and no local data collection.

## How It Works

1. Select text on a webpage.
2. Right-click and choose **Search with ChatGPT**.
3. A new tab opens with ChatGPT and your selected text included in the URL query.

## Project Structure

- `extension_upload/` — Chrome extension source files (`manifest.json`, background service worker, and icons).
- `store_assets/` — Store listing assets, screenshots, and privacy policy documents.

## Installation (Developer Mode)

1. Open Chrome and go to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `extension_upload/` folder from this repository.

## Permissions

- `contextMenus` — Used only to add the context menu item.
- `tabs` — Used only to open a new ChatGPT tab with the encoded query.

## Privacy

This extension does not collect, store, or sell personal data. It only processes selected text locally to build the ChatGPT URL.

For full details, see: `store_assets/PRIVACY_POLICY.md`.

## Version

Current extension version: **1.0.0**.
