[Readme.md](https://github.com/user-attachments/files/32431315/Readme.md)
# React Fibonacci Counter

A simple, interactive Fibonacci Counter application built with **React.js** and **TypeScript** using Vite.

## 📌 Project Overview

This project dynamically calculates and displays the Fibonacci sequence ($1, 1, 2, 3, 5, 8, 13, 21, \dots$) upon user interaction. Every time the button is clicked, the next number in the sequence is computed in real time using arithmetic logic without reliance on pre-defined or hardcoded arrays.

## 🚀 Requirements Implemented

- **React.js & TypeScript:** Built using React functional components with strict TypeScript type annotations (`.tsx`).
- **State Management:** Uses React's `useState` hook to maintain component state (`current`, `previous`, and `clickCount`).
- **Event Handling:** Utilizes the `onClick` event handler to trigger sequence calculations.
- **Dynamic Calculation:** Computes each Fibonacci number dynamically using basic math ($n_{\text{next}} = n_{\text{current}} + n_{\text{previous}}$) instead of array lookups.

## 🛠️ How to Run Locally

1. **Clone or download the repository:**
   ```bash
   git clone <your-repository-url>
   cd fibonacci-counter
