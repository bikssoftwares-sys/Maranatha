const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Create connection without database first
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true
});

// Read and execute SQL file
const sqlFile = fs.readFileSync(path.join(__dirname, 'database.sql'), 'utf8');

connection.execute(sqlFile, (err, results) => {
  if (err) {
    console.error('Error setting up database:', err);
  } else {
    console.log('Database setup completed successfully!');
    console.log('- Database created: maranatha_volleyball');
    console.log('- Tables created: users, events, event_registrations, admins');
    console.log('- Sample data inserted');
    console.log('- Admin user created (username: admin, password: admin123)');
  }
  connection.end();
});