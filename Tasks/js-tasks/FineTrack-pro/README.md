# 💰 FinTrack Pro

A simple and responsive personal finance tracker built using **HTML, Tailwind CSS, and Vanilla JavaScript**. This project helps users manage their income and expenses with real-time balance updates, transaction history, and local storage support.

## Features

* User Registration & Login
* Local Storage Authentication
* Add Income & Expense Transactions
* Edit Existing Transactions
* Delete Transactions
* Live Balance, Income & Expense Summary
* Transaction Counter
* Cash Flow Analysis Chart
* Search Transactions
* Filter by Income / Expense
* User Preferences (Name & Currency)
* Reset All Transaction Data
* Logout Functionality
* Responsive Dashboard
* Data Persistence using Local Storage

## Technologies Used

* HTML5
* Tailwind CSS
* Vanilla JavaScript (ES6)
* Chart.js
* SweetAlert2
* Local Storage API

## Project Structure

```text
├── index.html
├── login.html
├── register.html
├── dashboard.html
│
├── css/
│   └── dashboard.css
│
├── js/
│   ├── login.js
│   ├── register.js
│   └── dashboard.js
│
└── assets/
```

## How to Run

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Run the project using Live Server.
4. Register a new account.
5. Login with the registered credentials.
6. Start managing your transactions.

## Local Storage

The project stores data inside the browser using Local Storage.

Stored Items:

* `users`
* `currentUser`

This allows users to stay logged in and keeps transaction data even after refreshing the page.

## Future Improvements

* Export transactions as PDF/CSV
* Monthly analytics
* Budget planning
* Multiple account support
* Cloud database integration

## Author

**Nofal Kachhot**

Built as a practice project to improve JavaScript, DOM manipulation, Local Storage, and responsive UI development.
