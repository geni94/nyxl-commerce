const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

const products = [
  { 'id': 1, 'title': 'Table for 6', 'price': 500.01, 'inventory': 2, 'shipping': 15.00 },
  { 'id': 2, 'title': 'Multicolored Banch', 'price': 80.99, 'inventory': 10, 'shipping': 5.00 },
  { 'id': 3, 'title': 'Multicolored chair', 'price': 39.99, 'inventory': 3, 'shipping': 22.50 },
  { 'id': 4, 'title': 'Opened Table', 'price': 300.99, 'inventory': 5, 'shipping': 9.00 },
  { 'id': 5, 'title': 'Office Corner', 'price': 987.00, 'inventory': 1, 'shipping': 35.00 },
  { 'id': 6, 'title': 'Double Shelf', 'price': 299.59, 'inventory': 6, 'shipping': 11.00 },
  { 'id': 7, 'title': 'Tasty Wooden Table', 'price': 29.00, 'inventory': 2, 'shipping': 18.00 },
  { 'id': 8, 'title': 'NyxL Badge!', 'price': 12.99, 'inventory': 4, 'shipping': 6.00 },
  { 'id': 9, 'title': 'Minimalistic Table', 'price': 109.10, 'inventory': 10, 'shipping': 22.70 },
  { 'id': 10, 'title': 'Bed for 2 and Baby', 'price': 1333.99, 'inventory': 3, 'shipping': 3.50 },
  { 'id': 11, 'title': 'Steel Table', 'price': 30.99, 'inventory': 5, 'shipping': 7.90 },
  { 'id': 12, 'title': 'Reshapable BookShelf', 'price': 375.00, 'inventory': 5, 'shipping': 25.00 }
]

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': '+ $100.00 on limit' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
