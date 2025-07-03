# Fluent Frontend Tools

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-brightgreen?style=for-the-badge)]([https://creeper32767.github.io/fluent-tools/](https://frontend-toolspack-creeper32767.netlify.app/))
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

A collection of useful, single-page web applications built with modern web technologies and a clean, Fluent UI-inspired design. This project aims to provide simple, powerful tools that run directly in your browser, with no backend required.

---

## 🚀 Included Tools

This repository contains a homepage that links to three distinct web applications:

### 1. Fluent Code Editor

A versatile and responsive online code editor. Perfect for quick edits, learning, and sharing code snippets.

*   **Syntax Highlighting:** Support for JavaScript, Python, HTML, CSS, C++, Java, and more.
*   **Theme Switching:** Instantly switch between light (Default) and dark (Dracula) themes.
*   **File Operations:** Upload local files and download your work.
*   **Responsive Design:** Works smoothly on both desktop and mobile devices.

### 2. Professional Reader Card Generator

Create and share beautifully designed quote cards from your favorite books.

*   **Rich Customization:** Choose from a selection of elegant Chinese fonts for titles and body text.
*   **Personal Touch:** Upload your own photo to be included on the card.
*   **HD Export:** Generate a high-resolution PNG image of your final card, perfect for sharing on social media.
*   **Pre-designed Templates:** Use the "Random Example" button to quickly see a professionally designed layout.

### 3. Web Screenshot Generator

A powerful tool to capture full-page screenshots of any website.

*   **Full-Page Capture:** Renders the entire webpage, no matter how long, into a single PNG image.
*   **Interactive Preview:** Load the target website in an iframe, scroll, click, and interact with it to get the perfect shot before capturing.
*   **Client-Side Security:** All operations happen in your browser. Your session data (cookies, logins) is used to load the page but is never sent to a server.
*   **Live Progress Bar:** See the rendering progress in real-time when generating complex pages.

---

## 🛠️ Tech Stack

*   **UI Framework:** [Microsoft Fluent UI Web Components](https://www.fast.design/docs/components/getting-started/) for a modern, clean interface.
*   **Core:** HTML5, CSS3, Modern JavaScript (ES6+).
*   **Key Libraries:**
    *   [CodeMirror.js](https://codemirror.net/): Powers the code editor.
    *   [html2canvas.js](https://html2canvas.hertzen.com/): Used for generating images from DOM elements in the card and screenshot tools.

---

## 📂 Project Structure

The project is organized with a main homepage and separate directories for each tool, promoting modularity and easy maintenance.


---

## ⚙️ Getting Started (Running Locally)

You can run this project on your local machine with just a web browser.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Creeper32767/fluent-tools.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd fluent-tools
    ```

3.  **Open the main page:**
    Simply open the `index.html` file in your preferred web browser.

    > **Note:** Some browser security features (like the Clipboard API) may work best when served from a local web server instead of a `file:///` path. You can use simple tools like the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code.

---

## ☁️ Deployment

This is a fully static website, making it incredibly easy to deploy for free.

### Option 1: Netlify (Recommended for ease)

1.  Drag and drop the entire `root` folder onto the [Netlify dropzone](https://app.netlify.com/drop).
2.  Your site will be live in seconds!

### Option 2: GitHub Pages

1.  Push your project to a public GitHub repository.
2.  In your repository's **Settings** tab, go to the **Pages** section.
3.  Choose the `main` branch as your deployment source and save.
4.  Your site will be available at `https://your-username.github.io/your-repo-name/`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Creeper32767/fluent-tools/issues).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

*   **Microsoft** for the Fluent UI Web Components.
*   The developers of **CodeMirror** and **html2canvas** for their powerful libraries.
*   **Google Fonts** for providing the beautiful custom fonts used in the Reader Card Generator.
