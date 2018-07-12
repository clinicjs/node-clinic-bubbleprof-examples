'use strict'
const casual = require('casual')
const async = require('async')

const template = () => {
  return {
    id: casual.uuid,
    title: casual.title,
    score: casual.integer(1, 100),
    by: {
      id: casual.username
    }
  }
}

const generate = (type, count) => {
  return new Promise((resolve, reject) => {
    const results = {data: {hn: {}}}
    results.data.hn[type] = []

    for (let i = 1; i <= count; i++) {
      results.data.hn[type].push(template())
    }

    return resolve(results)
  })
}

const slowIO = (type, count) => {
  async.series([
    (done1) => setTimeout(done1, Math.random() * 1000),
    (done1) => async.parallel([
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000)
    ], done1)
  ], (err, results) => {

    return generate(type, count)
  })
}

const sleep = (ms) => {
  const future = Date.now() + ms
  while (Date.now() < future);
}

const slowEventLoop = (type, count) => {
  return new Promise((resolve, reject) => {
    sleep(50)
    return resolve(generate(type,count))
  })
}

module.exports = {
  generate,
  slowIO,
  slowEventLoop
}
