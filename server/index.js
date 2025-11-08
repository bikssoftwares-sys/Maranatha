const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'maranatha_volleyball'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    console.log('Please ensure MySQL is running and the database is created.');
    console.log('You can run the SQL commands in server/database.sql to set up the database.');
  } else {
    console.log('Connected to MySQL database');
  }
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Maranatha Volleyball Academy API' });
});

// User registration
app.post('/api/register', async (req, res) => {
  const { name, email, password, phone, age, skill_level } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (name, email, password, phone, age, skill_level) VALUES (?, ?, ?, ?, ?, ?)';

    db.execute(query, [name, email, hashedPassword, phone, age, skill_level], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// User login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.execute(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
});

// Get events
app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events ORDER BY date ASC';
  db.execute(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
});

// Create event (admin only)
app.post('/api/events', (req, res) => {
  const { title, description, date, location, max_participants } = req.body;

  const query = 'INSERT INTO events (title, description, date, location, max_participants) VALUES (?, ?, ?, ?, ?)';
  db.execute(query, [title, description, date, location, max_participants], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'Event created successfully' });
  });
});

// Register for event
app.post('/api/events/:id/register', (req, res) => {
  const eventId = req.params.id;
  const { user_id } = req.body;

  const query = 'INSERT INTO event_registrations (event_id, user_id) VALUES (?, ?)';
  db.execute(query, [eventId, user_id], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Already registered for this event' });
      }
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Registered for event successfully' });
  });
});

// Update event (admin only)
app.put('/api/events/:id', (req, res) => {
  const eventId = req.params.id;
  const { title, description, date, location, max_participants } = req.body;

  const query = 'UPDATE events SET title = ?, description = ?, date = ?, location = ?, max_participants = ? WHERE id = ?';
  db.execute(query, [title, description, date, location, max_participants, eventId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event updated successfully' });
  });
});

// Delete event (admin only)
app.delete('/api/events/:id', (req, res) => {
  const eventId = req.params.id;

  const query = 'DELETE FROM events WHERE id = ?';
  db.execute(query, [eventId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event deleted successfully' });
  });
});

// Admin login
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.promise().execute('SELECT * FROM admins WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const admin = rows[0];
    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
    res.json({ token, admin: { id: admin.id, username: admin.username } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get admin stats
app.get('/api/admin/stats', async (req, res) => {
  try {
    const [usersResult] = await db.promise().execute('SELECT COUNT(*) as count FROM users');
    const [eventsResult] = await db.promise().execute('SELECT COUNT(*) as count FROM events');
    const [registrationsResult] = await db.promise().execute('SELECT COUNT(*) as count FROM event_registrations');

    const stats = {
      totalUsers: usersResult[0].count,
      totalEvents: eventsResult[0].count,
      totalRegistrations: registrationsResult[0].count
    };

    res.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});