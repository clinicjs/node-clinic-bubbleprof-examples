const http = require('http')

const server = http.createServer(function (req, res) {
  // one bubble for the server request
  setTimeout(() => res.end(), 1000) // 1s latency, increase 1s for longer lines, tiny bubble for .end()
})

server.listen(10000)
