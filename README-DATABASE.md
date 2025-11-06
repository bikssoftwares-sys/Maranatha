# Database Setup Instructions

## Prerequisites
1. Install MySQL Server on your computer
2. Make sure MySQL is running

## Setup Steps

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Database
Edit `server/.env` file with your MySQL credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=maranatha_volleyball
JWT_SECRET=your_secret_key
PORT=5000
```

### 3. Setup Database
```bash
npm run setup-db
```

### 4. Start Server
```bash
npm start
```

## Default Admin Login
- Username: `admin`
- Password: `admin123`

## API Endpoints
- POST `/api/register` - User registration
- POST `/api/login` - User login
- GET `/api/events` - Get all events
- POST `/api/events/:id/register` - Register for event
- POST `/api/admin/login` - Admin login
- GET `/api/admin/stats` - Admin statistics

## Database Tables
- `users` - User accounts
- `events` - Volleyball events
- `event_registrations` - Event registrations
- `admins` - Admin accounts