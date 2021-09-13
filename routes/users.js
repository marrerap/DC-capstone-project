var express = require('express');
const bcrypt = require('bcrypt');
var router = express.Router();
const db = require('../models');
const checkAuth = require('../checkAuth');

/* Register New User */
router.post('/register', function(req, res, next) {
  // take username, password
  if (!req.body.username || !req.body.password || !req.body.email ) {
    res.status(400).json({
      error: 'please include username, password and email'
    })
    return
  }

  // check if username is taken
  db.User.findOne({ 
    where: {
      username: req.body.username,
      email: req.body.email
    }
  })
    .then((user) => {
      if (user) {
        res.status(400).json({
          error: 'username or email is already in use'
        })
        return
      }


      //hash password
      bcrypt.hash(req.body.password, 10)
        .then((hash) => {
          // store in database
          db.User.create({
            username: req.body.username,
            password: hash
          })
            .then((user) => {
              // respond with success/error
              res.status(201).json({
                success: 'User created'
              })
            })
        })
    })
});

router.post('/login', async (req, res) => {
  // check if username and password
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      error: 'please include email and password'
    })
    return
  }

  // find user by username
  const user = await db.User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    res.status(400).json({
      error: 'could not find user with that email'
    })
    return
  }

  // check password
  const success = await bcrypt.compare(req.body.password, user.password)
  if (!success) {
    res.status(401).json({
      error: 'incorrect password'
    })
    return
  }
  // login
  req.session.user = user

  // extract password from user, assign all other to a new userData variable
  const { password, ...userData } = user.dataValues;

  // respond with success/error
  res.json({
    success: 'Successfully logged in',
    user: userData // sending back userData which does not include password
  })
})

// logout
router.get('/logout', (req, res) => {
  // clear user information from session
  req.session.user = null
  res.json({
    success: 'user logged out'
  })
})

// current
router.get('/current', checkAuth, async (req, res) => {
  const user = await db.User.findByPk(req.session.user.id)

  // extract password from user, assign all other to a new userData variable
  const { password, ...userData } = user.dataValues;

  // respond with success/error
  res.json(userData) // sending back userData which does not include password)
})

module.exports = router;








