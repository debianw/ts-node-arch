import { FastifyInstance } from 'fastify'
import * as payService from './pay.service'

async function routes(fastify: FastifyInstance, options) {
  fastify.get('/', async (request, reply) => {
    const payments = payService.getPayments() 

    return {
      payments,
    }
  })

  fastify.post<{
    Body: {
      amount: number
    }
  }>('/charge', async(req, rep) => {
    const { amount } = req.body

    return {
      amount
    }
  })
}

export default routes