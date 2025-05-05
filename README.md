![header.png](header.png)

---
# TidyDev

TidyDev is a productivity tool designed to streamline development workflows by managing snippets, opening links dynamically (like Raycast), and storing clipboard history based on user interests. This project is built with Tauri and aims for a lightweight, fast, and minimalistic approach.

---

## 🚀 Features

* **Snippets**: Quickly access and store code snippets for reuse.
* **Link Opening**: Open URLs based on dynamic templates, e.g., search queries for YouTube, Google, GitHub, etc.
* **Clipboard History**: Access your clipboard history from the past week, month, or three months, based on user interest.

---

## 🛠️ Getting Started

### Prerequisites

* Node.js (v16 or higher)
* Rust (v1.65 or higher)
* Tauri CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/borravrun/tidydev.git
   cd tidydev
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Add Tauri dependencies:

   ```bash
   pnpm tauri add global-shortcut
   ```

4. Run the application:

   ```bash
   pnpm tauri dev
   ```

---

## 🧑‍💻 Features in Development

### 1. Snippets

* Store reusable code snippets for easy access.
* Assign keyboard shortcuts or quick commands to each snippet.

### 2. Link Opening

* Set up dynamic link templates like `yt {query}` to open YouTube searches directly from the launcher.

### 3. Clipboard History

* Keep track of clipboard history (for the past week, month, or three months).
* Sort or filter the clipboard history based on user preferences.

---

## 🛠️ Configuration

* **Global Hotkeys**: Users can define custom global hotkeys to trigger certain actions in the app, such as opening links or running snippets.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## 📢 Acknowledgments

* Powered by **Tauri**, **Rust**, and **React**.
* Inspired by **Raycast** and **Alfred** for their productivity features.
* Thanks to the open-source community for their contributions.

