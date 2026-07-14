# Eventify — Event Ticket Booking

A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing events and booking tickets, with real-time updates via Socket.IO.

## Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, React Router, Axios, Socket.IO Client
**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.IO, JWT Authentication, Nodemailer

## Project Structure
Event-Ticket-Booking/
├── client/     # React frontend (Vite)
└── server/     # Express backend API
## Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB database (e.g. free tier on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) (for email features)

### 1. Clone the repo

```bash
git clone https://github.com/Karthikeya12724/Event-Ticket-Booking.git
cd Event-Ticket-Booking
```

### 2. Set up the server

Create a `server/.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=any_random_secret_string
NODE_ENV=development
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
SENDER_EMAIL=your_gmail_address@gmail.com
```

Install dependencies and start the server:

```bash
cd server
npm install
npm start
```

The server runs on `http://localhost:3000` by default.

### 3. Set up the client

In a separate terminal:

```bash
cd client
```

Create/update `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Features

- User authentication (signup/login with JWT)
- Browse and search events
- Book event tickets
- Real-time updates via WebSockets
- Email notifications (OTP, booking confirmations)

## License

ISC
