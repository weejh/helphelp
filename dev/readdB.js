exports.dBread = function (quesTion) {
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

  const voteDatamatch = {
    'questions': quesTion
  }

  const voteDatarequired = 'voteA voteB'

  var voteData
  Vote.findOne(voteDatamatch, voteDatarequired, function (err, voteData) {
    if (err) return console.error(err)
    voteData = voteData
    console.log('in read module, read data is ' + voteData)
    mongoose.disconnect()
  })
  return voteData
}
