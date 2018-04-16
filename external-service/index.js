const http = require('http')
const get = require('simple-get')

console.log('Spin up the external service if you haven\'t:')
console.log('node ./external.js --latency=some-latency-in-ms')

const server = http.createServer(function (req, res) {
  const id = req.url.slice(1)
  get.concat(`http://localhost:3001/${id}/user.json`, function (err, _, body) {
    if (err) return onerror(res)
    body = JSON.parse(body)
    get.concat(body.tweets, function (err, _, body) {
      if (err) return onerror(res)
      body = JSON.parse(body)
      res.end(JSON.stringify(body, null, 2))
    })
  })
})

server.listen(3000)

function onerror (res) {
  res.statusCode = 500
  res.end('An error occurred')
}
