const fs = require('fs')
const util = require('util')
const http = require('http')

const service = util.promisify(fs.readFile).bind(null, __filename)

const server = http.createServer(async function (req, res) {
  const a = await service()
  const b = await service()
  const c = await service()

  res.end(Buffer.concat([a, b, c]))
})

server.listen(3000)
