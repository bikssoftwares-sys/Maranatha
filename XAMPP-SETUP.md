# XAMPP Database Setup

## 1. Install XAMPP
Download and install XAMPP from https://www.apachefriends.org/

## 2. Start Services
Open XAMPP Control Panel and start:
- Apache
- MySQL

## 3. Create Database
1. Open browser and go to `http://localhost/phpmyadmin`
2. Click "New" to create database
3. Name it `maranatha_volleyball`
4. Click "Create"

## 4. Import Database
1. Select your database `maranatha_volleyball`
2. Click "Import" tab
3. Choose file: `server/database.sql`
4. Click "Go"

## 5. Update Environment
Edit `server/.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=maranatha_volleyball
JWT_SECRET=your_secret_key
PORT=5000
```

## 6. Start Application
```bash
cd server
npm install
npm start
```

Then in another terminal:
```bash
npm start
```

## Default Login
- Admin: username `admin`, password `admin123`