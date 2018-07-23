const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  fs.readFile(__filename, function (err, buf1) {
    if (err) throw err
    fs.readFile(__filename, function (err, buf2) {
      if (err) throw err
      fs.readFile(__filename, function (err, buf3) {
        if (err) throw err
        res.end(Buffer.concat([buf1, buf2, buf3]))
      })
    })
  })
})

server.listen(10000)
