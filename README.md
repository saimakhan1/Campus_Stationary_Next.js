# Campus Stationery Store Web Application

## Project Overview

The **Campus Stationery Store** is a web application built with **Next.js 15/16** (App Router) that allows students and staff to browse stationery products online. It includes mock authentication for staff, a public-facing landing page, product listing, product details, and a protected admin dashboard to add new products.  

This project was created as a simple, realistic, and fast-to-implement full-stack web application.

---

## Features

### 🏠 Landing Page (Public)
- **Hero Section**: Welcome message and store tagline  
- **About Store**: Information about the purpose of the stationery store  
- **Popular Products**: Preview of best-selling items  
- **Categories**: Pens, notebooks, accessories, etc.  
- **Why Choose Us**: Affordable prices and campus convenience  
- **Customer Reviews**: Feedback from students  
- **Contact Section**: Store contact information  

✅ No login required  

---

### 🔐 Authentication (Mock Login)
- Hardcoded staff credentials:  
  - **Email:** `admin@campusstore.com`  
  - **Password:** `123456`  
- Credentials stored in **cookies**  
- Protects dashboard routes from unauthorized users  
- On successful login, staff is redirected to the **All Products page**  

---

### 📦 Item List Page (Public)
- Displays all stationery products  
- Data fetched from an **Express.js API** or `products.json`  
- Each product card shows:  
  - Product Name  
  - Short Description  
  - Price  
  - Image  
- Clicking a product card navigates to the **Product Details page**  

**Example Products:**  
- Ball Pen  
- Geometry Box  
- Notebook  
- Calculator  

---

### 📄 Item Details Page (Public)
- Shows complete details of a single product:  
  - Product Image  
  - Name  
  - Description  
  - Price  
  - Category  
- Publicly accessible, no login required  

---

### ➕ Add Item Page (Protected – Admin Only)
- Staff login required  
- Form to add new products (Name, Price, Description, Image URL)  
- Sends data to the Express.js server or JSON file  
- Unauthorized users are redirected to the login page  
- Includes **toast notifications** for successful product creation  

---

## 🛠 Technologies Used
- **Next.js 15/16** (App Router)  
- **Express.js API / JSON** for product data  
- **Tailwind CSS** for styling  
- **React Hooks** for state management  
- Optional: **React Icons** for UI enhancements  

---

## 🚀 Project Structure
app/
├── (public)/ # Public pages with Navbar & Footer
│ ├── layout.jsx
│ ├── page.jsx # Home
│ ├── login/page.jsx
│ └── products/page.jsx
└── dashboard/ # Protected admin pages
├── layout.jsx # Sidebar layout
├── products/page.jsx # All Products / Items list
└── add-product/page.jsx # Add new product
components/ # Reusable UI components
lib/ # Utility functions (auth, products)
data/ # products.json


---

## ⚡ Usage Instructions

### 1. Clone the repository
```bash
git clone https://github.com/saimakhan1/Campus_Stationary_Next.js
cd campus-stationery-store

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Open the application

Open http://localhost:3000
 in your browser

5. Staff Login

Navigate to /login

Use credentials:

Email: admin@campusstore.com
Password: 123456