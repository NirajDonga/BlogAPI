# Blog API

A RESTful API for a blogging platform built with Express.js and MongoDB.

## Features

- User authentication (register, login, verify email)
- Blog post creation and management
- Like functionality for blog posts
- Password reset functionality
- JWT-based authentication

## Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/blogapi
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRY=30d
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_email_password
   COOKIE_EXPIRY=30
   ```

### Running the Application

Development mode:
```
npm run dev
```

## API Endpoints

### User Routes
- POST `/api/user/register` - Register a new user
- POST `/api/user/login` - Login
- POST `/api/user/verify` - Verify email
- GET `/api/user/profile` - Get user profile

### Blog Routes
- GET `/api/blog` - Get all blogs
- GET `/api/blog/:id` - Get a specific blog
- POST `/api/blog` - Create a new blog
- PUT `/api/blog/:id` - Update a blog
- DELETE `/api/blog/:id` - Delete a blog

### Like Routes
- POST `/api/likes/:blogId` - Like/unlike a blog 