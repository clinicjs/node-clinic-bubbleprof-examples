const fs = require('fs')
const util = require('util')
const http = require('http')

const service = util.promisify(fs.readFile).bind(null, __filename)

const server = http.createServer(async function (req, res) {
  const [a, b, c] = await Promises.all(service(), service(), service())

  res.end(Buffer.concat([a, b, c]))
})

server.listen(3000)
