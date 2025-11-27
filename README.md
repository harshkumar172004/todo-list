# 📝 To-Do List (MERN Stack)

A simple full-stack To-Do List application built using the **MERN stack**:

* **MongoDB** – Database
* **Express.js** – Backend API
* **React + Vite** – Frontend UI
* **Node.js** – Runtime

---

## 📁 Folder Structure

```
todo-project/
 ├── frontend   → React + Vite app
 └── backend    → Node.js + Express + MongoDB server
```

---



### 1️⃣ Backend Setup

```sh
cd backend
```

#### 🧪 Configure Environment Variables

Create a file named **`.env`** inside the `backend/` folder and add:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.rrgehtr.mongodb.net/toDo?appName=Cluster0
```

> ⚠️ Replace `<username>` and `<password>` with your **actual MongoDB credentials**.

#### ▶️ Start Backend Server

```sh
npm start
```

Backend will run on:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```sh
cd frontend
```

#### ▶️ Start Frontend

```sh
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---



## ✔️ Features

* Add tasks
* Delete tasks
* Update/Edit tasks
* Responsive UI
* Dark/Light

