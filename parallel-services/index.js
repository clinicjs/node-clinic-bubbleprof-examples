const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  var missing = 2
  fs.readFile(__filename, function (err, buf) {
    if (err) throw err
    res.write(buf)
    if (!--missing) res.end()
  })
  fs.readFile(__filename, function (err, buf) {
    if (err) throw err
    res.write(buf)
    if (!--missing) res.end()
  })
})

server.listen(10000)
