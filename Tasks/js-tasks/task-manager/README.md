# DOM Explorer - Interactive Task Manager

## 📌 Project Overview

DOM Explorer is a fully interactive Task Manager Application built using **HTML, CSS, and Vanilla JavaScript**.

The project demonstrates core browser and DOM concepts such as:

* DOM Manipulation
* Event Handling
* Event Delegation
* Event Bubbling
* Event Capturing
* Attributes vs Properties
* Browser Rendering Pipeline
* Local Storage

No frameworks or external libraries were used.

---

## 🚀 Features

### Task Management

* Add New Tasks
* Edit Existing Tasks
* Delete Tasks
* Mark Tasks as Completed
* Task Status Tracking

### Statistics

* Total Tasks Counter
* Completed Tasks Counter
* Pending Tasks Counter

### Theme Support

* Light Mode
* Dark Mode
* Theme Persistence using Local Storage

### Storage

* Tasks are stored using Local Storage
* Data remains available after page refresh

### Event Propagation Visualizer

* Event Bubbling Demonstration
* Event Capturing Demonstration
* Interactive Visual Flow

### Browser Rendering Pipeline

Visual explanation of:

* HTML
* Parsing
* Tokenization
* DOM Tree
* CSS
* CSSOM Tree
* Render Tree

---

# 🧠 DOM Concepts Used

## DOM Manipulation

DOM Manipulation allows JavaScript to dynamically modify webpage elements.

Methods used:

* createElement()
* append()
* appendChild()
* remove()
* classList.add()
* classList.remove()

Tasks are created, updated, completed, and deleted dynamically without refreshing the page.

---

## Attributes vs Properties

### Attributes

Attributes are defined in HTML.

Example:

```html
<input value="Task">
```

Accessed using:

```javascript
input.getAttribute("value")
```

### Properties

Properties belong to DOM objects.

Accessed using:

```javascript
input.value
```

Difference:

* Attribute shows the initial value from HTML.
* Property shows the current value after user interaction.

---

# Event Handling

Event Handling is used to respond to user actions.

Examples:

* Click Events
* Form Submission Events
* Theme Toggle Events

Methods used:

```javascript
addEventListener()
```

---

# Event Delegation

Instead of attaching event listeners to every task button individually, a single listener is attached to the parent task container.

Benefits:

* Better Performance
* Less Memory Usage
* Works with Dynamically Created Elements

Example:

```javascript
tasksContainer.addEventListener("click", (e) => {
  // handle actions
});
```

---

# Event Bubbling

Event Bubbling is the default event propagation mechanism.

Flow:

Child → Parent → Grandparent

Example:

```text
Child Clicked
Parent Clicked
Grandparent Clicked
```

The event starts from the target element and moves upward through its ancestors.

---

# Event Capturing

Event Capturing is the opposite of bubbling.

Flow:

Grandparent → Parent → Child

Example:

```text
Grandparent Clicked
Parent Clicked
Child Clicked
```

The event travels from the outermost element toward the target element.

---

# Browser Rendering Pipeline

## 1. HTML Parsing

The browser reads the HTML document and starts parsing it.

---

## 2. Tokenization

HTML is broken into small tokens such as:

* Opening Tags
* Closing Tags
* Attributes
* Text Content

---

## 3. DOM Tree Creation

The browser converts HTML tokens into a DOM Tree.

Example:

```text
html
 └── body
      └── div
           └── p
```

---

## 4. CSS Parsing

The browser reads CSS rules.

---

## 5. CSSOM Tree Creation

CSS rules are converted into a CSS Object Model Tree.

---

## 6. Render Tree Creation

The browser combines:

DOM Tree + CSSOM Tree

to create the Render Tree.

Only visible elements are included.

---

## 7. Painting

The browser paints pixels on the screen and displays the webpage.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage API

---

# 📂 Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── script.js
├── no-task.avif
└── README.md
```

---

# 🎯 Learning Outcomes

By completing this project I learned:

* DOM Manipulation
* Dynamic Element Creation
* Event Handling
* Event Delegation
* Event Bubbling
* Event Capturing
* Local Storage Management
* Browser Rendering Pipeline
* Responsive UI Development

---

# 👨‍💻 Author

Developed as part of the DOM Explorer Assignment using HTML, CSS, and Vanilla JavaScript.
