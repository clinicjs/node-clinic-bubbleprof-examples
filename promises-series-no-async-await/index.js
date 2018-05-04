const fs = require('fs')
const util = require('util')
const http = require('http')

const service = util.promisify(fs.readFile).bind(null, __filename)

const server = http.createServer(function (req, res) {
  const buffers = []

  service()
    .then(function (buf) {
      buffers.push(buf)
      return service()
    })
    .then(function (buf) {
      buffers.push(buf)
      return service()
    })
    .then(function (buf) {
      buffers.push(buf)
      res.end(Buffer.concat(buffers))
    })
})

server.listen(3000)
