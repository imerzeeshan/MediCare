const express = require('express');
const db = require('../db');
const auth = require('../Middleware/auth.js');
const router = express.Router();

router.use(auth);

router.post('/', (req, res) => {
  const { name, dosage, frequency } = req.body;
  const userId = req.user.id;

  if (!name || !dosage || !frequency) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.run(
    'INSERT INTO medications (user_id, name, dosage, frequency) VALUES (?, ?, ?, ?)',
    [userId, name, dosage, frequency],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to add medication' });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
});

router.get('/', (req, res) => {
  db.all(
    'SELECT * FROM medications WHERE user_id = ?',
    [req.user.id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch medications' });
      }
      res.json(rows);
    }
  );
});

router.put('/:id/taken', (req, res) => {
  const { id } = req.params;
  db.run(
    'UPDATE medications SET taken = 1 WHERE id = ? AND user_id = ?',
    [id, req.user.id],
    function (err) {
      if (err || this.changes === 0) {
        return res.status(400).json({ error: 'Failed to update medication' });
      }
      res.json({ message: 'Medication marked as taken' });
    }
  );
});

module.exports = router;
