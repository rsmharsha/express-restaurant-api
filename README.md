# Express Restaurant API 🍔

A free, public, **GET-only REST API** built with **Express.js** that serves realistic restaurant data. Designed for **frontend practice**, **backend learning**, and **API consumption demos**.

## 🚀 Features

- **Read-only (GET-only):** Safe for public consumption.
- **Realistic Data:** Includes 50 structured restaurant records.
- **Nested JSON:** Great for practicing handling complex data structures on the frontend.
- **Filterable:** Specific data can be requested using query parameters.
- **Beginner Friendly:** No authentication required—just fetch and go.

## 🚦 Rate Limiting

To prevent abuse and ensure fair usage, this API is rate-limited.

- **Limit:** 100 requests per 15 minutes
- **Scope:** Per IP address
- **Response on limit exceeded:** `429 Too Many Requests`

This helps keep the API stable and available for everyone.

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

#### 2. Get Restaurants by Filtering

Retrieve details for a specific restaurant or restaurants.

### ⚡ Filtering

You can filter the results using query parameters.

| Parameter         | Description                | Example Usage           |
| ----------------- | -------------------------- | ----------------------- |
| `id`              | Filter by restaurant id    | `?id=Bangalor5`         |
| `name`            | Filter by restaurant name  | `?name=Pasta Street`    |
| `city`            | Filter by city location    | `?city=Bangalore`       |
| `cuisine_type`    | Filter by specific cuisine | `?cuisine_type=Indian`  |
| `veg_only`        | Filter for vegetarian-only | `?veg_only=true`        |
| `is_open`         | Filter for is-open         | `?is_open=true`         |
| `offers_delivery` | Filter for offers-delivery | `?offers_delivery=true` |

You can filter the results using path parameters.

| Parameter      | Description                | Example Usage           |
| -------------- | -------------------------- | ----------------------- |
| `city`         | Filter by city location    | `/city/mumbai`          |
| `cuisine_type` | Filter by specific cuisine | `/cuisine_type/italian` |
| `state`        | Filter by state            | `/state/maharashtra`    |

#### **Examples**

```http
# Get restaurants in delhi with mughlai cuisine
GET /api/v1/restaurants?cuisine_type=mughlai&city=delhi

# Get all restaurants in Bangalore
GET /api/v1/restaurants?city=Bangalore

# Get only vegetarian restaurants
GET /api/v1/restaurants?veg_only=true

# Get all Indian cuisine restaurants
GET /api/v1/restaurants?cuisine_type=Indian

```
