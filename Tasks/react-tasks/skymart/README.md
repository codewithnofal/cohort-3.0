# 🛍️ SkyMart

SkyMart is a modern e-commerce web application built with React. It allows users to create an account, browse products, search and filter items, manage their shopping cart, and complete a simple checkout experience. The project focuses on building a smooth frontend experience using React, Context API, and Local Storage.

---

## 🚀 Features

- User Registration & Login
- Local Storage Authentication
- Browse Products
- Product Details Page
- Search Products
- Filter by Category
- Sort Products
- Add to Cart
- Update Cart Quantity
- Remove Individual Items
- Clear Cart
- Checkout Functionality
- Dynamic Greeting Based on Time
- Toast Notifications
- Responsive Design
- Smooth Page Animations

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Context API
- Framer Motion
- Lucide React Icons
- Sonner Toast
- DummyJSON API
- Local Storage

---

## 📂 Project Structure

```
src
│
├── components
├── pages
├── context
├── assets
├── App.jsx
└── main.jsx
```

---

## 🔑 Authentication

Authentication is handled using **Local Storage**.

Each registered user is stored locally, and the currently logged-in user is managed using a separate `currUser` object. This allows the app to remember the login session even after refreshing the page.

---

## 🛒 Cart System

The cart is managed separately for every user.

Features include:

- Add products
- Increase quantity
- Decrease quantity
- Remove items
- Clear entire cart
- Checkout
- Automatic total calculation

Cart data is saved in Local Storage, so it persists after refreshing the browser.

---

## 🔍 Product Features

- Product listing
- Product detail page
- Search by product name
- Category filtering
- Price sorting
- Rating sorting

Products are fetched from the **DummyJSON API**.

---

## 📱 Responsive Design

The application is fully responsive and works across:

- Desktop
- Tablet
- Mobile

---

## 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project folder

```bash
cd skymart
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

---

## 🌐 Live Demo

Add your deployed Netlify link here.

```
https://your-netlify-link.netlify.app
```

---

## 📸 Screenshots

You can add screenshots of:

- Home Page
- Product Listing
- Product Details
- Cart
- Login
- Register

---

## 🎯 What I Learned

While building this project, I practiced and improved my understanding of:

- React Components
- React Hooks
- Context API
- React Router
- State Management
- Local Storage
- API Integration
- Conditional Rendering
- Form Validation
- Reusable Components
- Responsive UI Design
- Project Structure

---

## 📌 Future Improvements

- Wishlist
- Order History
- Payment Gateway
- User Profile
- Dark/Light Theme
- Backend Authentication
- Database Integration
- Admin Dashboard

---

## 👨‍💻 Author

**Nofal Kachhot**

If you liked this project, feel free to give it a ⭐ on GitHub.