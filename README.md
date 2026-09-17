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
Copy the example file, then update the new `.env` file with your MongoDB connection string.

```bash
cp .env.example .env
```

### 2) Install Dependencies

```bash
# Reproducible server dependencies
cd server
npm ci

# Reproducible client dependencies
cd ../client
npm ci
```

### 3) Run the Application

```bash
# Start the API server (from /server)
npm run dev

# Start the client (from /client)
npm run dev
```

Visit `http://localhost:5173` to use the app.

### 4) Verify the Project

```bash
# Run the API smoke test
cd server
npm test

# Build the React client
cd ../client
npm run build
```

The smoke test does not require MongoDB. Running the full API does require a reachable MongoDB instance configured in the root `.env` file.

If npm returns `403 Forbidden`, first confirm that npm is using the public registry:

```bash
npm config get registry
npm ping --registry=https://registry.npmjs.org/
```

The expected registry is `https://registry.npmjs.org/`. A different registry, an expired token in an npm configuration file, or a restricted proxy can cause a 403 before project code runs.

## API Endpoints
- `POST /students`
- `GET /students`
- `PUT /students/:id`
- `DELETE /students/:id`

## Challenges Faced
- Coordinating the API and UI workflow while keeping the UI simple and responsive.
- Keeping the state management light while still supporting edit and delete flows.
