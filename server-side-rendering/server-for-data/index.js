const fastify = require('fastify')({
  logger: true
})
const Data = require('./data')

async function generateData(request, reply) {
  const { variables } = request.body
  let data

  switch (variables.path) {
    case 'slowIO': 
      data = await Data.slowIO(variables.type, variables.limit)
      break
    case 'slowEventLoop':
      data = await Data.slowEventLoop(variables.type, variables.limit)
      break
    default:
      data = await Data.generate(variables.type, variables.limit)
      break
  }

  return data
}

fastify.post('/api/query', generateData)

fastify.listen(3001, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
