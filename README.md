# Student Manager (MERN)

A simple student management web application built with MongoDB, Express, React, and Node.js. It supports creating, viewing, updating, and deleting student records with a lightweight UI.

## Tech Stack
- **MongoDB** for the database
- **Express.js** for the REST API
- **React.js** for the UI
- **Node.js** for the runtime
- **CSS** for styling

## Setup Instructions

### 1) Configure Environment
Create a MongoDB database and update the `.env` file at the repository root.

```bash
MONGODB_URI="your-mongodb-connection-string"
PORT=5000
```

### 2) Install Dependencies

```bash
# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
```

### 3) Run the Application

```bash
# Start the API server (from /server)
npm run dev

# Start the client (from /client)
npm run dev
```

Visit `http://localhost:5173` to use the app.

## API Endpoints
- `POST /students`
- `GET /students`
- `PUT /students/:id`
- `DELETE /students/:id`

## Challenges Faced
- Coordinating the API and UI workflow while keeping the UI simple and responsive.
- Keeping the state management light while still supporting edit and delete flows.
