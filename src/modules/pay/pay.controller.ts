import * as payService from './pay.service'

async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    const payments = payService.getPayments() 

    return {
      payments,
    }
  })
}

export default routes