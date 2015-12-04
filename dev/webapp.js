const express = require('express')
const app = express()
const path = require('path')
// const Promise = require('bluebird')
const savedataBase = require(path.join(__dirname, 'savedB'))
const readdataBase = require(path.join(__dirname, 'readdB'))
// const readD = Promise.promisify(readdataBase)
app.get('/read', function (req, res) {
  const data = readdataBase.dBread('1.')
  console.log('/GET => ' + data)
  res.send(data)
})

app.put('/put', function (req, res) {
  const quesTion = '1.'
  const votEA = 8
  const votEB = 8
  savedataBase.dBsave(quesTion, votEA, votEB)
  console.log('/put, save data')
  res.send('updated')
})

module.exports = app
