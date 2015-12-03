exports.dBsave = function (quesTion, votEA, votEB) {
  const mongoose = require('mongoose')
  const dataBase = 'votedata'
  const collectionName = 'votes'
  const dbUri = 'mongodb://' +
    process.env.MONGODB_USER + ':' +
    process.env.MONGODB_PASSWORD +
    '@ds061984.mongolab.com:61984/' + dataBase

  const connection = mongoose.createConnection(dbUri)

  const VoteSchema = mongoose.Schema({
    questions: String,
    voteA: Number,
    voteB: Number
  })

  var Vote = connection.model(collectionName, VoteSchema)

  const voteDatarequired = {
    questions: quesTion
  }

  const voteDataupdate = {
    'voteA': votEA,
    'voteB': votEB
  }

  const voteDatastatus = {
    new: true
  }

  console.log('in database update module')

  Vote.findOneAndUpdate(voteDatarequired, voteDataupdate, voteDatastatus, function (err) {
    if (err) return console.error(err)
// console.log('save to dB !!!')
    mongoose.disconnect()
  })
}
