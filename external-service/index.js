const http = require('http')
const get = require('simple-get')

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
