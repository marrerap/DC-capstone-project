var express = require('express');
var router = express.Router();
const db = require('../models')

// Get all messages
router.get('/chat', async function(req, res, next) {
    // find all messages in db
    const messages = await db.Message.findAll({
        // display username with message
        include: [{
            model: db.User,
            attributes: ['username']
        }]
    })
    // send them back
    res.send(messages)
})

router.post('/chat', async (req, res) => {
    // content, message
    if (!req.body.content) {
        res.status(400).json({
            error: 'Must include text before sending'
        })
        return
    }
    // find logged in user
    const user = await db.Message.findByPk(req.session.user.id)
    // create a new message
    const message = await user.createMessage({
        content: req.body.content
    })
    // send back response
    res.json(message)
})

model.exports = router