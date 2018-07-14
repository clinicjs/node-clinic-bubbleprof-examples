const sanitizeHtml = require('sanitize-html')
const nodeFetch = require('node-fetch')

module.exports = async function(fastify, opts) {
  const pageSize = 30

  function computeCacheKey(type, ...args) {
    return `${type}:${args.join('|')}`
  }

  async function fetchStories(request, reply) {
    // Get parameters
    const { filter, page, dataPath } = request.query || {}
    const cacheKey = computeCacheKey('stories', filter, page)
    // Check cache first
    const cached = request.apiCache.get(cacheKey)
    if (cached) return cached

    // Calculate page offset
    const offset = (Math.max(parseInt(page, 0) || 0, 1) - 1) * pageSize

    // Choose the query type
    let queryType = 'topStories'

    switch (filter) {
      case 'show':
        queryType = 'showStories'
        break
      case 'ask':
        queryType = 'askStories'
        break
      case 'jobs':
        queryType = 'jobStories'
        break
      case 'rank':
        queryType = 'newStories'
        break
      case 'new':
        queryType = 'newStories'
        break
    }

    // Build the query
    const body = {
      query: `
      query apiQuery($limit: Int, $offset: Int) {
        hn {
          ${queryType}(limit: $limit, offset: $offset) {
            id
            title
            url
            score
            by {
              id
            }
          }
        }
      }
      `,
      variables: {
        path: dataPath,
        type: queryType,
        limit: pageSize,
        offset
      }
    }

    // Perform the request
    const response = await nodeFetch('http://localhost:3001/api/query', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    })

    // Parse the response
    const json = await response.json()
    const data = json.data.hn[queryType]
    // Cache for 5 minutes
    request.apiCache.put(cacheKey, data, 300 * 1000)
    // Return results
    return data
  }

  fastify.get('/api/stories', fetchStories)
}
