# 👕 CustomTees -- Crafting Personalized T-shirts Web Application
CustomTees is a dynamic and interactive MERN stack web application that empowers users to create and purchase custom-designed T-shirts. It features dedicated dashboards for Customers, Sellers, and Admins, supporting real-time tracking, design previews, and business analytics.

------------------------------------------------------------------------

## 🎥 Demo

👉 [Watch Full
Demo](https://drive.google.com/file/d/1-ZteFuQo_okSwmlJ2Q_gBynje8lsQSh-/view?usp=drive_link)

------------------------------------------------------------------------

## 📸 Screenshots
-   Homepage
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/ca3bf009-524c-4873-b1c7-89b6c94d2eae" />
  
-   3D Customisation Tool
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/7e110f29-6e19-44b8-a954-dd0a70e16c9c" />

-   Submit Design page
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/beb1635c-c9e6-454b-b75d-0ad89776d17b" />

-   Product modal
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/c046067b-c4a6-4674-a931-7ed78110e230" />

-   Cart & Checkout
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/3353f86e-2286-41ce-848d-bfc88c7c628c" />

-   Products page (Admin)
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/82a48c61-7c6e-4421-a19e-69dd7ffdbb90" />

-   Orders page (Admin)
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/43a5719d-5037-4e31-bb07-7a1feeea0ae6" />

-   Design Submissions (Admin)
    <img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/f9927c75-5c66-44db-92c0-f6a51a46abac" />




------------------------------------------------------------------------

## ✨ Features

### 👤 Customer Dashboard

-   Browse ready-made T-shirt designs.\
-   Customize T-shirts in real time using a **3D model viewer**.\
-   Place and track orders with **live status updates**.

### 🎨 Seller Dashboard

-   Upload personal T-shirt designs.\
-   Monitor design performance & sales.\
-   Track orders and view analytics.

### 🛠️ Admin Dashboard

-   Manage all orders across the platform.\
-   Update order statuses in real time.\
-   Manage users (**Customer / Seller roles**).\
-   Access **platform-wide analytics**.

### 📦 Other Highlights

-   **Real-time updates** with Socket.IO.\
-   Clean & responsive UI with **Tailwind CSS + ShadCN UI**.\
-   **3D Model integration** with Three.js.\
-   **JWT-based role protection** & route guarding.

------------------------------------------------------------------------

## 🛠️ Tech Stack

**Frontend** - React.js\
- Redux Toolkit & RTK Query\
- Tailwind CSS + ShadCN UI\
- React Router\
- Three.js\
- Cloudinary (image handling)

**Backend** - Node.js + Express.js\
- MongoDB + Mongoose\
- Socket.IO (real-time communication)\
- JWT (authentication & role-based access)

------------------------------------------------------------------------

## 📂 Folder Structure

    CustomTees/
    │
    ├── client/                 # React frontend
    │   ├── src/
    │   │   ├── scenes/         # Pages for Customer, Seller, Admin
    │   │   ├── components/     # Reusable components
    │   │   ├── state/          # Redux Toolkit logic
    │   │   └── App.js
    │
    ├── server/                 # Node/Express backend
    │   ├── routes/
    │   ├── controllers/
    │   ├── models/
    │   ├── middleware/
    │   └── index.js

------------------------------------------------------------------------

## 🚀 Installation

### Step 1: Clone the Repository

``` bash
git clone https://github.com/aniketmore-pixel/CustomTees.git
cd CustomTees
```

### Step 2: Backend Setup

``` bash
cd server
npm install
npm start
```

### Step 3: Frontend Setup

``` bash
cd client
npm install
npm start
```

✅ Ensure **MongoDB** is running locally or use MongoDB Atlas.\
🔐 Configure `.env` files in both **client** and **server** with keys
like: - `JWT_SECRET`\
- `MONGO_URI`

------------------------------------------------------------------------

## 💡 Usage

-   **Customers** → Browse, customize, and order T-shirts using the **3D
    model previewer**.\
-   **Sellers** → Upload designs, track orders, and view analytics.\
-   **Admins** → Manage users, update order statuses, and access
    analytics.

------------------------------------------------------------------------

## 🔐 Admin Access

The Admin Dashboard is **protected using JWT & role-based access**.\
Only authenticated users with the `"admin"` role in their token payload
can access admin routes.

------------------------------------------------------------------------



## 📝 License

MIT License -- Free to use and modify.

------------------------------------------------------------------------

## 👨‍💻 Authors
- Aarya Arban
- Aniket More
- Digvijaysingh Rajput
- Jatin Ghind
