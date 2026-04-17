# 🌍 Community Support Platform (HelpLink)

## 📌 Overview

HelpLink is a community-driven platform that connects people who need help with those willing to offer assistance in their local area.

Users can post requests, offer services, browse opportunities, and communicate with others — all in one organized system designed to strengthen local communities.

---

## 🚀 Features

### 🔐 Authentication

* User registration and login
* Secure password hashing (bcrypt)
* JWT-based authentication (planned)

---

### 📌 Help Requests

* Create, edit, and delete help requests
* Include title, description, category, and location
* Mark requests as completed (future)

---

### 🤝 Offer Help

* Users can offer services (tutoring, moving, food donation, etc.)
* Set availability and preferences
* Browse both requests and offers

---

### 🔍 Browse & Filter

* View all available requests and offers
* Filter by category (tutoring, errands, moving, etc.)
* Search by keyword or location (planned)

---

### 💬 Communication

* Contact users regarding requests or offers
* Direct messaging system (planned)
* Notifications for interactions (future)

---

### 🛡️ Community Safety

* Report inappropriate posts
* Admin moderation system (future)
* Promote safe and respectful interactions

---

## 🧱 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Frontend (Planned)

* HTML, CSS, JavaScript
* React (optional upgrade)

### Authentication

* JWT (JSON Web Tokens)
* bcrypt

### Deployment

* MongoDB Atlas
* Render (backend)
* Vercel / Netlify (frontend)

---

## 📁 Project Structure

```bash
/config        # Database connection
/controllers   # Business logic
/models        # Mongoose schemas
/routes        # API endpoints
/middleware    # Auth & error handling
/utils         # Helper functions
server.js      # Entry point
```

---

## 📡 API Endpoints

### 🔐 Auth

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

---

### 📌 Requests

* GET `/api/requests` → Get all requests
* POST `/api/requests` → Create request
* GET `/api/requests/:id` → Get single request
* PUT `/api/requests/:id` → Update request
* DELETE `/api/requests/:id` → Delete request

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/community-support-backend.git
cd community-support-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

### 4. Run the server

```bash
npm run dev
```

---

## 🧠 Architecture

```
Client → Routes → Controllers → Models → Database
```

---

## 🔮 Future Improvements

* Real-time chat (WebSockets)
* Geolocation-based search
* Notification system
* Rating & review system
* AI-based request categorization
* Admin dashboard

---

## 🧪 Testing

Use Postman or Thunder Client to test API endpoints.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📌 Authors

* Soowlih Compaore
* Tasbir Ahammed

---

## 📄 License

This project is open-source and available under the MIT License.
