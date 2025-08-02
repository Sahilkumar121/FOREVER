
# E-Commerce Website

This is a full-stack e-commerce website built with React for the frontend and Express.js with MongoDB for the backend. The website features product listings, user authentication, and responsive design.


## Features

Frontend

- Home Page: Displays latest collections and best sellers

- Product Listings: Grid layout with hover effects

- User Authentication: Login and Signup functionality

- Responsive Navigation: Mobile-friendly menu

- Footer: Company information and contact details

Backend

- User Authentication: Secure signup and login with password hashing

- MongoDB Database: Stores user information

- REST API: Handles user registration and authentication


## Tech Stack

**Client:** React, React Router, CSS

**Server:** Node, Express, MongoDB (with mongoose), Bcrypt (for password hashing), CORS (for cross-origin request)


## Installation

1. Clone the repository

```bash
  git clone https://github.com/your-username/ecommerce-website.git
```

2. Install dependencies for both frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

3. Set up environment variables:
- Create a .env file in the backend directory with:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the development servers:

- In the backend directory:

```bash
npm start
```

- In the frontend directory:

```bash
npm run development
```
    
## Screenshots

![App Screenshot](screenshot/screenshot1.png)


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
