const fastify = require('fastify')

const app = fastify()
const wait = parseInt(require('minimist')(process.argv).latency || 0, 10)

if (!wait) {
  console.log('Specify the latency using --latency=ms')
}

app.get('/:id/user.json', function (req, res) {
  latency(function () {
    res.send({
      id: req.params.id,
      name: 'A User',
      age: 42,
      tweets: 'http://localhost:3001/' + req.params.id + '/tweets.json'
    })
  })
})

app.get('/:id/tweets.json', function (req, res) {
  const tweets = []

  latency(function () {
    for (var i = 0; i < 10; i++) {
      tweets.push({
        userId: req.params.id,
        tweet: 'tweet number ' + i
      })
    }

    res.send(tweets)
  })
})

app.listen(3001)

function latency (fn) {
  setTimeout(fn, Math.round((Math.random() * 0.4 + 0.8) * wait))
}
