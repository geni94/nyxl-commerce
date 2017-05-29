<template lang="pug">
  div(class="container shop-container")
    div(class="row mt-2")
      div.col-sm-12
        ProductList/
        ShoppingCart/
        Coupons/
</template>

<script>
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'
import Coupons from './Coupons.vue'
export default {
  name: 'Shop',
  components: {
    ProductList,
    ShoppingCart,
    Coupons
  }
}
</script>

<style lang="stylus">
  .shop-container
    padding-top 8em
</style>
