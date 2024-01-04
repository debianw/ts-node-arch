import { v4 } from 'uuid'

export const getUsers = () => {
  const users = [{ _id: v4() },{ _id: v4() }, { _id: v4() }, { _id: v4() }, { _id: v4() }, { _id: v4() }, { _id: v4() }, { _id: v4() }]

  return users 
}