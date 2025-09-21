# **CustomTees - Crafting Personalized Tshirts Web Application**

CustomTees is a dynamic and interactive MERN stack web application that empowers users to create and purchase custom-designed T-shirts. It features dedicated dashboards for Customers, Sellers, and Admins, supporting real-time tracking, design previews, and business analytics.

## 🎥 [👉 Watch Full Demo](https://drive.google.com/file/d/1-ZteFuQo_okSwmlJ2Q_gBynje8lsQSh-/view?usp=drive_link)

<img width="640" height="360" alt="customtees" src="https://github.com/user-attachments/assets/82f8dbce-dcec-4334-8a1a-81089f98144c" />

✨ Features

👤 Customer Dashboard

Browse ready-made T-shirt designs.

Customize T-shirts in real-time using a 3D model viewer.

Place and track orders with real-time status updates.

🎨 Seller Dashboard

Upload personal T-shirt designs.

Monitor individual design performance.

Track order statuses and view sales analytics.

🛠️ Admin Dashboard

View and manage all orders across the platform.

Update order statuses in real time.

Manage users (roles: customer, seller).

Access platform-wide analytics and operations.

📦 Other Highlights

Real-time updates with Socket.IO.

Clean and responsive UI using Tailwind CSS and ShadCN UI.

3D model integration with Three.js.

JWT-based role protection and route guarding.

🛠️ Tech Stack

**Frontend:**

React.js

Redux Toolkit & RTK Query

Tailwind CSS

ShadCN UI

React Router

Three.js

Cloudinary (image handling)

**Backend:**

Node.js

Express.js

MongoDB + Mongoose

Socket.IO (real-time communication)

JWT (authentication & role-based access)

📂 Folder Structure

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

🚀 Installation

Step 1: Clone the Repository

git clone https://github.com/aniketmore-pixel/CustomTees.git

cd CustomTees

Step 2: Install Backend Dependencies

cd server

npm install

npm start

Step 3: Install Frontend Dependencies

cd client

npm install

npm start

✅ Ensure MongoDB is running locally or use MongoDB Atlas.

🔐 Set up .env files in both client and server with appropriate values for keys like JWT_SECRET, MONGO_URI, etc.

💡 Usage

Register or login as a Customer, Seller, or Admin.

Customers can browse and customize shirts using a 3D model and place orders.

Sellers can upload designs, monitor orders, and view analytics.

Admins can manage users and update order statuses in real-time.

🔐 Admin Access

The Admin Dashboard is protected using JWT and role-based access.

Only authenticated users with the "admin" role in their token payload can access admin routes.
