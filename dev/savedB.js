function dBsave (quesTion, votEA, votEB) {
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

  const voteData = new Vote({
    question: quesTion,
    voteA: votEA,
    voteB: votEB
  })

  voteData.save(function (err) {
    if (err) return console.error(err)
    return console.log('save to dB !!!')
  })
}

module.export = dBsave
