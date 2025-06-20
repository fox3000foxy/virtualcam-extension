# 📹 Virtual Camera for Chrome

> **A modern Chrome extension to create a virtual camera experience in your browser.**

---

![image](https://github.com/user-attachments/assets/6813f493-00bd-444d-b6db-5990addd730b)

![image](https://github.com/user-attachments/assets/e502f809-dc2f-4973-af81-de81aba5545c)



## ✨ What's New in v1.0.0

- **Modern UI:** Beautiful, responsive popup interface with drag & drop video upload, animated status, and toast notifications.
- **Persistent Video State:** Remembers playback position and restores it, even after browser restarts.
- **IndexedDB Storage:** Videos and settings are stored locally for fast access and privacy.
- **BroadcastChannel Sync:** Real-time sync of video state and controls across all tabs.
- **One-click Enable/Disable:** Instantly toggle the virtual camera on or off.
- **Drag & Drop Support:** Easily load videos by dragging them into the popup.
- **Clear All Data:** One button to erase all stored videos and settings.
- **Improved Error Handling:** User-friendly notifications for errors and actions.
- **Instancied:** Each domain can handle a different camera. E.g. The camera you use to Instagram is not the same one you use on Discord.  
- **Settings (coming soon):** Loop, autoplay, and mute toggles (UI ready).

---

## 🚀 Features

- **Virtual Camera Stream:** Replace your webcam with any video file in supported sites.
- **Popup Controls:** Play, pause, seek, and manage your video directly from the extension popup.
- **Domain-specific Activation:** The extension only applies to the current domain for privacy.
- **No External Servers:** All processing and storage are local to your browser.

---

## 🛠️ Installation

1. **Download** or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extension folder.
5. The extension icon should now appear in your Chrome toolbar.

---

## 🎬 Usage

1. Click the extension icon to open the popup.
2. **Load a video** (drag & drop or use the button).
3. Click **Enable camera** to activate the virtual camera.
4. Use the video controls to play, pause, or seek.
5. The extension will remember your position and settings.

---

## 👤 Authors

- [Fox3000foxy](https://github.com/fox3000foxy)
- GitHub Copilot (GPT 4.1, Claude 3.5 Sonnet)

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Notes

- Works best on sites that use `getUserMedia` for webcam access.
- All video data stays on your device.
- For feedback or issues, open a GitHub issue.

---

## 🦋 Known Bugs

- Click directly on the video to pause it, do not use the pause button from the seekbar, it will not pause properly the mirrored flux

---
