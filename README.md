# Alphamed – Digital Lab Test Booking Platform

**Alphamed** is a digital platform developed as a final project for the **GOMYCODE Fullstack Development Program**. It enables users to browse, select, and book laboratory tests — either as individual tests or bundled packages — through a clean and user-friendly interface. The platform also includes authentication for secure access to user-specific features.

## Features

* 🔍 Browse lab tests and packages via a clean tabbed interface.
* 📦 Toggle between **Single Tests** and **Test Packages**.
* 🔐 User Authentication (Login/Register) with **Firebase Authentication**.
* ⚡ Real-time toast notifications for feedback using React-Toastify.
* 📱 Mobile-responsive design with **Tailwind CSS**.
* 🔄 Dynamic fetching of data from test endpoints.
* 🚫 Protected routes for pages that require user login.
* ⚙️ Modular and component-based architecture using **React**.

## Tech Stack

### 🧠 Frontend

* **React.js** – JavaScript library for building user interfaces.
* **React Router DOM** – For client-side routing and protected navigation.
* **Tailwind CSS** – Utility-first CSS framework for styling.
* **React-Toastify** – Elegant toast notifications.
* **Axios** – For making HTTP requests.

### 🔐 Authentication

* **Firebase Authentication** – For secure login and registration functionality.

### ⚙️ Tools and Utilities

* **Vite** – Fast frontend tooling and dev server.
* **Git & GitHub** – Version control and repository management.

## Usage

* Register or log in using the Firebase-authenticated form.
* Browse tests via tabs (Single Tests / Test Packages).
* Book a test (connected features based on backend/API availability).
* Receive real-time feedback using toast notifications.
* Access restricted pages only after login.

