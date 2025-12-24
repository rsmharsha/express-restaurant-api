# express-restaurant-api

A free, public, **GET-only REST API** built with **Express.js** that serves realistic restaurant data.  
Designed for **frontend practice**, **backend learning**, and **API consumption demos**.

This project was built as a hands-on way to strengthen backend fundamentals after learning Express.js, and to provide a simple open API for budding developers.

---

## 🚀 Features

- Read-only (GET-only) REST API
- 50 realistic restaurant records
- Structured, nested JSON responses
- Filterable using query parameters
- Beginner-friendly and frontend-ready
- No authentication required

---

## 📦 Tech Stack

- Node.js
- Express.js
- JavaScript (CommonJS)

---

## 📌 Base URL

/api/v1/restaurants

---

## 🔍 Available Endpoints

### Get all restaurants

GET /api/v1/restaurants

### Get restaurant by ID

GET /api/v1/restaurants/:id

### Filter using query parameters

GET /api/v1/restaurants?city=Bangalore
GET /api/v1/restaurants?veg_only=true
GET /api/v1/restaurants?cuisine_type=Indian
