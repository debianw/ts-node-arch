import Fastify,{ FastifyInstance, RouteShorthandOptions } from 'fastify'
import * as userModule from './modules/user'
import * as orderModule from './modules/order'

const server: FastifyInstance = Fastify({
  logger: true,
})

server.register(userModule.routes, {
  prefix: "/user"
})

server.register(orderModule.routes, {
  prefix: '/order'
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