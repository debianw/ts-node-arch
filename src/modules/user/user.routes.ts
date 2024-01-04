import * as userService from './user.service'

async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    const users = userService.getUsers()

    return {
      users,
    }
  })
}

export default routes