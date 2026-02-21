# NC News (Frontend)

[**Live Demo**](https://ncnewswerth.netlify.app) | [**Backend Repository**](https://github.com/werthzack/nc-news-api)

## 📖 Introduction
**NC News** is a social news aggregation and discussion platform inspired by Reddit. I developed this project to build a high-performance, responsive frontend that interacts with a custom RESTful API, focusing on clean state management and a seamless user experience.

## 🛠️ Tech Stack
* **Frontend:** React, React Router, Axios
* **Backend:** Node.js, Express.js (REST API)
* **Database:** PostgreSQL, Supabase
* **Testing:** Jest, Supertest (Backend Reliability)
* **Deployment:** Render

## ✨ Key Features
* **Dynamic Browsing:** Filter news by topics and sort articles by date, comment count, or popularity.
* **Real-time Interaction:** Cast votes on articles and join discussions with live comment updates.
* **Optimistic UI:** Instant feedback on user actions (like voting) with background API syncing.
* **Resilient UX:** Dedicated loading states and error handling for a smooth, "no-crash" experience.
* **Search Functionality:** Implemented a global search bar for finding articles by keyword.

## 🧠 The Process
### What I Learned
During this project, I focused on **reusable component architecture**. I learned how to manage complex side effects with React Hooks and how to integrate Axios to handle asynchronous data fetching while keeping the UI responsive. On the backend, I prioritized reliability by implementing full TDD (Test Driven Development) coverage.

### Potential Improvements
* **User Profiles:** Add authentication to allow users to track their own posts and history.

## 🚀 How to Run the Project Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/werthzack/nc-news-frontend.git
   cd nc-news-frontend

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your backend API URL:
    ```env
    VITE_API_URL=https://nc-news-backend-b1yp.onrender.com
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```


## 🔗 Related Projects
This frontend relies on the **NC News Backend**, a REST API built with:
* **Node.js & Express**
* **PostgreSQL & Supabase**
* **Jest & Supertest** (Full TDD)

You can find the backend source code here: [NC News API](https://github.com/werthzack/nc-news-api)

---

## 🤝 Contributing
This project was developed as a solo project during the Northcoders Software Engineering Bootcamp. While it is primarily a portfolio piece, suggestions and pull requests are welcome!

---
