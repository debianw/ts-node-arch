import { v4 } from 'uuid'

export const getPayments = () => {
  const payments = [
    {
      _id: v4(),
      user: 1,
      status: 'charged'
    },
    {
      _id: v4(),
      user: 2,
      status: 'charged'
    }
  ]

  return payments
}