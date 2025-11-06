const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'maranatha_volleyball'
});

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // Delete existing admin
    db.execute('DELETE FROM admins WHERE username = ?', ['admin'], (err) => {
      if (err) console.log('No existing admin to delete');
      
      // Insert new admin
      db.execute('INSERT INTO admins (username, password) VALUES (?, ?)', 
        ['admin', hashedPassword], 
        (err, result) => {
          if (err) {
            console.error('Error creating admin:', err);
          } else {
            console.log('Admin created successfully!');
            console.log('Username: admin');
            console.log('Password: admin123');
          }
          db.end();
        }
      );
    });
  } catch (error) {
    console.error('Error:', error);
    db.end();
  }
}

createAdmin();