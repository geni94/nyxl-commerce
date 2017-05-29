<template>
  <div class="shopping-cart">
    <h3>Cart</h3>

    <shopping-cart-item
      v-for="item in items"
      :item="item"
      :key="item.id">
    </shopping-cart-item>

    <shopping-cart-summary></shopping-cart-summary>

    <div class="mt-1 text-xs-center">
      <button class="btn btn-success"
        :disabled="orderOnLimit"
        @click="buy">
        Checkout
      </button>
      <p v-if="orderOnLimit">Order is over limit.</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    items: 'cartProducts',
    orderOnLimit: 'orderOnLimit'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('You bought :)')
      window.location.reload()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopping-cart
    position fixed
    right 3em
    bottom 5em
    background #fff
    padding 1.5em
    border-radius 6px
    -webkit-box-shadow -1px 6px 5px 0px rgba(0,0,0,0.75)
    -moz-box-shadow -1px 6px 5px 0px rgba(0,0,0,0.75)
    box-shadow -1px 6px 5px 0px rgba(0,0,0,0.75)
    opacity .75
    &:hover
      opacity 1
</style>
