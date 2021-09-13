var express = require('express');
var router = express.Router();
const db = require('../models')

// Get all channels
router.get('/', async function(req, res, next) {
    // find all channels in db
    const channels = await db.Channel.findAll()
    // send them back
    res.send(channels)
}) 

router.post('/', async (req, res) => {
    // content, channel
    if (!req.body.channelName) {
        res.status(400).json({
            error: 'Must include channel!'
        })
        return
    }
    // find logged in user
    const user = await db.User.findByPk(req.session.user.id)

    // create a new channel
    const channel = await user.createChannel({
        channelName: req.body.channelName
    })

    // send back response
    res.json(channel)
})

model.exports = router;