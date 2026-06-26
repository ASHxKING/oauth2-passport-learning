# 🔐 OAuth2 & Passport.js Authentication System

A full-stack authentication project built to demonstrate OAuth2 authorization flows using **Node.js**, **Express.js**, **Passport.js**, and a custom **React.js** frontend. This project covers both local authentication and third-party OAuth2 provider integration with secure session management.

---

## 🚀 Features

- OAuth2 authorization flow with third-party provider (Google)
- Local authentication strategy using Passport.js
- Session-based user management with `express-session`
- Protected routes with authentication middleware
- Custom responsive frontend built with React.js
- Environment-based configuration using `.env`
- Clean MVC-style project structure

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Authentication | Passport.js, OAuth2, JWT |
| Frontend | React.js, HTML5, CSS3 |
| Session Management | express-session |
| Environment Config | dotenv |
| Package Manager | NPM |

---

## 📁 Project Structure

```
oauth2-passport-learning/
├── client/                 # React.js frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Login, Dashboard, Profile pages
│   │   └── App.jsx         # Root component
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/
│   │   └── passport.js     # Passport strategy configuration
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── index.js        # App routes
│   ├── middleware/
│   │   └── isAuthenticated.js  # Route protection middleware
│   └── index.js            # Express server entry point
├── .env.example            # Environment variable template
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- NPM v9+
- A Google OAuth2 App ([Create one here](https://console.cloud.google.com/))

### 1. Clone the repository

```bash
git clone https://github.com/ASHxKING/oauth2-passport-learning.git
cd oauth2-passport-learning
```

### 2. Install dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server/` directory:

```env
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:3000/auth/google/callback
SESSION_SECRET=your_session_secret
```

### 4. Run the application

```bash
# Start the backend server
cd server
npm start

# In a separate terminal, start the React frontend
cd client
npm start
```

The app will be available at `http://localhost:3000`

---

## 🔑 OAuth2 Flow

```
User clicks "Login with Google"
        ↓
App redirects to Google's Authorization Server
        ↓
User grants permission
        ↓
Google redirects back with Authorization Code
        ↓
Server exchanges code for Access Token
        ↓
Server fetches user profile using Access Token
        ↓
User session is created → Redirected to Dashboard
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/auth/google` | Initiates Google OAuth2 flow |
| GET | `/auth/google/callback` | OAuth2 callback handler |
| GET | `/auth/logout` | Destroys user session |
| GET | `/api/profile` | Returns authenticated user profile (protected) |
| GET | `/api/status` | Returns current auth status |

---

## 🔒 Security Highlights

- OAuth2 `state` parameter used to prevent CSRF attacks
- Sensitive credentials stored in environment variables only
- Sessions handled server-side with `express-session`
- Protected routes reject unauthenticated requests with `401`

---

## 📚 What I Learned

- How OAuth2 authorization code flow works end-to-end
- Configuring Passport.js strategies for third-party providers
- Securing routes using custom authentication middleware
- Managing user sessions in Express.js
- Structuring a full-stack Node.js + React.js application

---

## 🤝 Contributing

This is a personal learning project but PRs and suggestions are welcome!

---

## 📄 License

MIT License — feel free to use this as a reference for your own projects.

---

> Built by [Aashish Kumar](https://www.linkedin.com/in/ash0904/) — Backend-Heavy Full-Stack Engineer
