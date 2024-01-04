import Fastify,{ FastifyInstance, RouteShorthandOptions } from 'fastify'
import * as userModule from './modules/user'
import * as orderModule from './modules/order'
import * as payModule from './modules/pay'

const server: FastifyInstance = Fastify({
  logger: true,
})

server.register(userModule.controller, {
  prefix: "/user"
})

server.register(orderModule.controller, {
  prefix: '/order'
})

server.register(payModule.routes, {
  prefix: '/pay'
})

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
    console.log(`API listening on port 3000`)
  } catch(err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()