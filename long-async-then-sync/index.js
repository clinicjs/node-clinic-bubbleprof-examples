const fs = require('fs')
const http = require('http')
const zlib = require('zlib')

const server = http.createServer(function (req, res) {
  service(function (err, a) {
    if (err) return onerror(err)
    service(function (err, b) {
      if (err) return onerror(err)
      service(function (err, c) {
        if (err) return onerror(err)
        const buf = zlib.gzipSync(Buffer.concat([a, b, c]))
        res.end(buf)
      })
    })
  })

  function onerror (err) {
    res.statusCode = 500
    res.end(err.message)
  }
})

server.listen(3000)

function service (cb) {
  fs.readFile(__filename, cb)
}
