const { v4 } = require('uuid')

const getOrders = () => {
  const orders = [{ _id: 1 },{ _id: v4() }, { _id: v4() }, { _id: 4 }, { _id: 5 }, { _id: 6 }]

  console.log('orders!!!! => ', orders)
  // throw new Error("service getOrders crashed!")
  return orders
}

module.exports = {
  getOrders,
}