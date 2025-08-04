# Code Reviewer with Authentication

A full-stack code reviewer application with user authentication, built with React, Node.js, Express, and MongoDB.

## Features

- 🔐 User authentication (login/signup)
- 🛡️ Protected routes
- 💻 Code editor with syntax highlighting
- 🤖 AI-powered code review
- 📱 Responsive design
- 🎨 Modern UI/UX

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/code-reviewer
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=3000
   ```

4. Start MongoDB (if using local installation):
   ```bash
   # On Windows
   mongod
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

The backend will be running on `http://localhost:3000`

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:5173`

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. You'll be redirected to the login page
3. Create a new account or login with existing credentials
4. Once authenticated, you'll be taken to the code reviewer interface
5. Write or paste your code in the editor
6. Click "Review Code" to get AI-powered suggestions

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user (protected)

### Code Review
- `POST /ai/get-review` - Get AI code review (protected)

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── ai.controller.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── ai.routes.js
│   │   └── app.js
│   ├── config.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthPage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── CodeReviewer.jsx
│   │   │   ├── Auth.css
│   │   │   └── CodeReviewer.css
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── README.md
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation
- Secure session management

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

### Frontend
- React 19
- React Router for navigation
- Axios for API calls
- Context API for state management
- CSS3 for styling

## Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/code-reviewer
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=3000
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check if the connection string is correct
- Verify network connectivity

### Authentication Issues
- Check if JWT_SECRET is set
- Verify token expiration
- Ensure proper CORS configuration

### Frontend Issues
- Clear browser cache
- Check console for errors
- Verify API endpoints are accessible

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.