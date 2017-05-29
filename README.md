# nyxl shop

- not yet deployed.

Use [vue-devtools](https://github.com/vuejs/vue-devtools) if you want a see how everything happens.

### How cart works

- Products can be added to the cart if they've a item available on stock.
- Products added to cart must be removable.
- Checkout must be disabled if cart **total** is over user **limit**.
- If a product already exists on cart, its counter should be updated.
- All products have a shipping price. **shipping** is defined by the highest shipping price of products added to cart.

### How promotions work

- 30% OFF should reduce 30% of the costs on **subtotal**.
- $100.00 Discout should reduce $100.00 of **total**.
- Free Shipping should set **shipping** to zero.
- +$100.00 on limit should increase user **limit** by $100.00.

### We have 3 resources:

##### Profile

```js
{
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}
```

##### Products

##### Promotions

```js
{ 'id': 1, 'title': '30% OFF' },
{ 'id': 2, 'title': '$100.00 Discount' },
{ 'id': 3, 'title': 'Free Shipping' },
{ 'id': 4, 'title': '+ $100.00 on limit' }
```

## Build Setup

```bash
# install dependencies
npm install

# serve at localhost:8080 (hot-reload)
npm run dev

# build + minify for production
npm run build



# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
