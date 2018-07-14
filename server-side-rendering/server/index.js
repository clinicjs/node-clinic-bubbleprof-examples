const fastify = require('fastify')
const { existsSync, readFileSync } = require('fs')
const nodeFetch = require('node-fetch')
const { resolve } = require('path')
const { routes } = require('../dist/server/routes')
const { renderPage } = require('../dist/server/page.html')

function unhandledRejectionHandler(error) {
  console.error(error)
  process.exit(1)
}

function detectHttps() {
  const certPath = resolve(process.cwd(), 'ssl/certificate.pem')
  const keyPath = resolve(process.cwd(), 'ssl/private-key.pem')
  if (!existsSync(certPath) || !existsSync(keyPath)) return {}

  return { https: { key: readFileSync(keyPath), cert: readFileSync(certPath) }, http2: true }
}

function setupFetch(server) {
  global.fetch = async function(url, params) {
    const _url = (url.startsWith('/api')) ? `http://localhost:3000${url}` : url 
    return nodeFetch(_url, params)
  }
}

async function main() {
  // Create the instance
  const server = fastify({ logger: { prettyPrint: process.env.NODE_ENV !== 'production' }, ...detectHttps() })

  // Add routes
  for (const [path, component] of Object.entries(routes)) {
    for (const suffix of ['', '/page/:page']) {
      server.route({
        method: 'GET',
        url: `${path}${suffix}` || '/',
        handler: renderPage,
        config: {
          component
        }
      })
    }
  }

  server.register(require('./api'))
  server.register(require('fastify-compress'))
  server.decorateRequest('apiCache', require('memory-cache'))
  // Add server side support for fetch
  setupFetch(server)

  // Run the server!
  await server.listen(3000, '0.0.0.0')

  return server
}

process.on('unhandledRejection', unhandledRejectionHandler)
main().catch(unhandledRejectionHandler)
