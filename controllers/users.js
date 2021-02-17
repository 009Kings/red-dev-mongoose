const express = require('express');
const router = express.Router();
const User = require('../models/user');

// // Method 1
// let topDog = new User({
//   name: 'Anna Zocher',
//   email: 'anna.zocher@ga.co'
// });
// topDog.save(err => {
//   if (err) return console.error(`💩 Yikes bud:\n${err}`);
//   console.log(`${topDog.name} was successfully created!`);
// });

// // Method 2
// User.create({
//   name: 'Gavin Callandar',
//   email: 'tosspot@ga.co'
// }, (err, user) => {
//   if (err) return console.error(`💩 Trouble in Create:\n${err}`);
//   console.log(`${user.name} hath been created`);
// })

// Index - GET /users
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(`🔥 Error in users Index route:\n${err}`);
      return res.status(500).json({ error: 'Error in users Index route' });
    }
    res.json({ users });
  });
});

// Detail — GET /users/:id
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.error(`🔥 Error in users Detail route:\n${err}`);
      return res.status(500).json({ error: 'Error in users Detail route' });
    }
    res.json({ user });
  });
});

// Create — POST /users
router.post('/', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      console.error(`🔥 Error in users Create route:\n${err}`);
      return res.status(500).json({ error: 'Error in users Create route' });
    }
    res.json({ user });
  });
});

module.exports = router;