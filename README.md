# Express Restaurant API 🍔

A free, public, **GET-only REST API** built with **Express.js** that serves realistic restaurant data. Designed for **frontend practice**, **backend learning**, and **API consumption demos**.

## 🚀 Features

- **Read-only (GET-only):** Safe for public consumption.
- **Realistic Data:** Includes 50 structured restaurant records.
- **Nested JSON:** Great for practicing handling complex data structures on the frontend.
- **Filterable:** Specific data can be requested using query parameters.
- **Beginner Friendly:** No authentication required—just fetch and go.

## 📦 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Module System:** JavaScript (CommonJS)

---

## 📖 API Documentation

### 📌 Base URL

All endpoints are prefixed with:

```http
/api/v1/restaurants
```

### 🔍 Endpoints

#### 1. Get All Restaurants

Retrieve a list of all 50 restaurant records.

```http
GET /api/v1/restaurants
```

#### 2. Get Restaurant by ID

Retrieve details for a specific restaurant.

```http
GET /api/v1/restaurants/:id
```

### ⚡ Filtering

You can filter the results using query parameters.

| Parameter      | Description                | Example Usage          |
| -------------- | -------------------------- | ---------------------- |
| `city`         | Filter by city location    | `?city=Bangalore`      |
| `veg_only`     | Filter for vegetarian-only | `?veg_only=true`       |
| `cuisine_type` | Filter by specific cuisine | `?cuisine_type=Indian` |

#### **Examples**

```http
# Get all restaurants in Bangalore
GET /api/v1/restaurants?city=Bangalore

# Get only vegetarian restaurants
GET /api/v1/restaurants?veg_only=true

# Get all Indian cuisine restaurants
GET /api/v1/restaurants?cuisine_type=Indian

```
