function dBread (quesTion) {
  const mongoose = require('mongoose')
  const dataBase = 'votedate'
  const collectionName = 'votes'
  const dbUri = 'mongodb://' +
    process.env.EXPRESSAPI_MONGODB_USER + ':' +
    process.env.EXPRESSAPI_MONGODB_PASSWORD +
    '@ds061984.mongolab.com:61984/' + dataBase

  mongoose.connect(dbUri)

  console.log('in database module')

  var Vote = mongoose.model(collectionName, {
    question: String,
    voteA: Number,
    voteB: Number
  })

  const voteDatamatch = {
    'question': quesTion
  }

  const voteDatarequired = 'voteA voteB'

  Vote.findOne(voteDatamatch, voteDatarequired, function (err, voteData) {
    if (err) return console.error(err)
    return ({
      question: voteData.question,
      voteA: voteData.voteA,
      voteB: voteData.voteB
    })
  })
}

module.export = dBread
