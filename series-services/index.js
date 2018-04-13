const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  fs.readFile(__filename, function (err, buf) {
    if (err) throw err
    res.write(buf)
    fs.readFile(__filename, function (err, buf) {
      if (err) throw err
      res.write(buf)
      res.end()
    })
  })
})

server.listen(10000)
