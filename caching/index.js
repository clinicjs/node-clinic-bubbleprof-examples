const fs = require('fs')
const http = require('http')
const zlib = require('zlib')

const caching = process.argv.indexOf('--cache') > -1

if (!caching) {
  console.log('Set --cache to enable caching')
}

var cache = null

const server = http.createServer(function (req, res) {
  if (cache) return res.end(cache)
  
  fs.readFile(__filename, function (err, buf) {
    if (err) return onerror(res)
    zlib.gzip(buf, function (err, zipped) {
      if (err) return onerror(res)
      if (caching) cache = zipped
      res.end(zipped)
    })
  })
})

server.listen(3000)

function onerror (res) {
  res.statusCode = 500
  res.end('an error happended')
}
