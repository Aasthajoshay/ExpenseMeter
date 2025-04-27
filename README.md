💸 Expense Meter (Expense Tracker)

A modern, full-stack expense tracker web application built using the MERN stack (MongoDB, Express.js, React with Vite, Node.js). Users can securely register, log in, and manage their personal expenses, with features for adding, updating, deleting, and visualizing expenses.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Overview](#api-overview)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication:** Secure registration and login using JWT and HTTP-only cookies[6].
- **Expense Management:** Add, update, delete, and mark expenses as done/undone[7].
- **Expense Categories:** Assign categories to expenses for better organization[1][7].
- **Filtering:** Filter expenses by category or completion status[7].
- **Interactive Charts:** Visualize expenses for better insight .
- **Responsive UI:** Built with React and Vite for a fast, modern experience[9][8].
- **RESTful API:** Modular backend with clear separation of concerns[4][7][6].

---

## Tech Stack

- **Frontend:** React.js (with Vite), React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Other:** dotenv, cookie-parser, CORS

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd expense-tracker
   ```

2. **Install dependencies**

   - **Backend:**
     ```bash
     npm install
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm install
     ```

3. **Environment Variables**

   In the backend root, create a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret
   PORT=8000
   ```

4. **Run the app**

   - **Backend:**
     ```bash
     npm start
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev
     ```

5. **Open** `http://localhost:5173` in your browser.

---

## Folder Structure

```
root/
  ├── backend/
  │   ├── models/
  │   │   ├── expense.model.js
  │   │   └── user.model.js
  │   ├── controllers/
  │   │   ├── expense.controller.js
  │   │   └── user.controller.js
  │   ├── routes/
  │   │   ├── expense.routes.js
  │   │   └── user.routes.js
  │   ├── index.js
  │   └── database/
  │       └── db.js
  └── frontend/
      ├── src/
      │   ├── App.jsx
      │   ├── main.jsx
      │   └── components/
      │       ├── Home.jsx
      │       ├── Login.jsx
      │       ├── Signup.jsx
      │       ├── Navbar.jsx
      │       └── ProtectedRoute.jsx
      └── ...
```

---

## API Overview

### Authentication

- **POST /api/v1/user/register** – Register a new user[6].
- **POST /api/v1/user/login** – Login and receive JWT in HTTP-only cookie[6].
- **GET /api/v1/user/profile** – Get current user profile[6].
- **POST /api/v1/user/logout** – Logout and clear cookie[6].

### Expenses

- **POST /api/v1/expense/** – Add a new expense[7].
- **GET /api/v1/expense/** – Get all expenses for the user, with optional filtering[7].
- **PATCH /api/v1/expense/:id** – Update an expense's details[7].
- **PATCH /api/v1/expense/:id/done** – Mark expense as done/undone[7].
- **DELETE /api/v1/expense/:id** – Delete an expense[7].

---

## Usage

- **Register or log in** to your account.
- **Add expenses** with description, amount, and category.
- **View, update, or delete** expenses as needed.
- **Filter expenses** by category or completion status.
- **Visualize** your expenses with interactive charts (frontend).
- **Logout** securely when finished.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

---

**Note:**  
- Remember to update the repository URL and add any additional setup or configuration steps specific to your deployment.
- For production, ensure environment variables and secrets are managed securely.

---


