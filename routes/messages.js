var express = require('express');
var router = express.Router();
const db = require('../models')

router.get('/chat', async function(req, res, next) {
    const messages = await db.Message.findAll({
        include: [{
            model: db.User,
            attributes: ['username']
        }]
    })

    res.send(messages)
})

router.post('/chat', async (req, res) => {
    if (!req.body.content) {
        res.status(400).json({
            error: 'Must include text before sending'
        })
        return
    }

    const user = await db.User.findByPk(req.session.user.id)
    const message = await user.createMessage({
        content: req.body.content
    })
    res.json(message)
})

model.exports = router