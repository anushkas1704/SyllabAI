
---

# 📘 Generative AI for Drafting Academic Course Outlines

A simple and modern web application that leverages **Google Gemini API** to automatically generate structured academic course outlines. Educators can input details such as course name, level, topics, objectives, and duration, and the system will produce a complete, organized course outline instantly.

---

## 🚀 Features

* 🖊️ Clean, modern, and minimal **UI/UX** built with **HTML, CSS, JavaScript**.
* ⚡ Integration with **Google Gemini API** for generating academic content.
* 📑 Generates **structured and readable course outlines** (not Markdown, directly formatted in clean text).
* 🔒 Secure handling of API key with `.env` file.
* 🌐 Works in the browser with simple setup.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **AI Model:** Google Gemini API
* **Environment Variables:** dotenv (for storing API keys)

---

## 📂 Project Structure

```
├── index.html        # Main UI page
├── style.css         # Stylesheet for UI
├── script.js         # Handles API calls and DOM updates
├── .env              # Stores Gemini API key (DO NOT COMMIT)
├── README.md         # Documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/generative-ai-course-outline.git
cd generative-ai-course-outline
```

### 2. Install Dependencies

This project uses a simple frontend with no build tools required. If you want to use `.env` locally for the API key, set up a small server:

```bash
npm init -y
npm install dotenv express
```

### 3. Add API Key

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

---

## ▶️ Run the App

If serving as a **static frontend (no backend)**:

* Open `index.html` in your browser.
* Replace the API key directly in `script.js` (not recommended for production).

If using a **backend for security**:

1. Create a small `server.js` file to load `.env` and proxy requests.
2. Start server:

   ```bash
   node server.js
   ```
3. Visit `http://localhost:3000` to use the app.

---

## 💡 How It Works

1. User enters course details (name, level, topics, duration, objectives).
2. On clicking **Generate Outline**, the system sends details to Gemini API.
3. Gemini generates a structured **course syllabus/outline**.
4. The output is displayed in a **clean, readable format**.

---

## 📸 Screenshots

### Input Form

*(Insert screenshot here)*

### Generated Outline

*(Insert screenshot here)*

---

## 📌 Future Improvements

* Export generated outline to **PDF/Word**.
* Add **dark mode toggle**.
* Support for **multiple AI models** (GPT, Claude, etc.).
* Save past outlines for quick access.

---


