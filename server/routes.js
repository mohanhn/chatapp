var express = require('express')
var router = module.exports = express.Router()
const Messages = require('../models/message')

router.post('/add-message', (req, res) => {
  const { name, text } = req.body
  const new_message = new Messages({name, text})
  new_message.save((err) => {
    if (err) return res.send({status: 'error'})
    res.send({name, text, status: 'success'})
  })
})

router.get('/get-messages', (req, res) => {
  Messages.find({}, (err, todos) => {
    if (err) return res.send({status: 'error'})
    res.send(todos)
  })
})
