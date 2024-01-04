const orderService = require('./order.service')

async function routes(fastify, options) {
  const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            orders: {
              type: 'array'
            }
          }
        }
      }
    }
  }

  fastify.get('/', async (request, reply) => {
    const orders = orderService.getOrders(); 

    return {
      orders,
    }
  })
}

module.exports = routes