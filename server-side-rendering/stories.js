'use strict'

const autocannon = require('autocannon')

const url = 'http://localhost:3000'

const headers = {
  'content-encoding': 'gzip',
  'content-type': 'application/json; charset=utf-8'
}
const requests = [
  {
    method: 'GET',
    path: '/api/stories?filter=top',
    headers
  },
  {
    method: 'GET',
    path: '/api/stories?filter=top&page=2',
    headers
  },
  {
    method: 'GET',
    path: '/api/stories?filter=top&page=3',
    headers
  },
  {
    method: 'GET',
    path: '/api/comments',
    headers
  },
  {
    method: 'GET',
    path: '/api/stories?filter=show',
    headers
  },
  {
    method: 'GET',
    path: '/api/stories?filter=ask',
    headers
  }
]

const instance = autocannon({
  title: 'ssr-example',
  url,
  connections: 10,
  pipelining: 1,
  duration: 10,
  requests,
}, console.log)

process.once('SIGINT', () => {
  instance.stop()
})

autocannon.track(instance)
