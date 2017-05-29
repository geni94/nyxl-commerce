<template lang="pug">
  div
    h3 Our Products
    div(class="row" v-for="row in productRows")
      div(class="col-sm-6" v-for="product in row")
        product(:product="product" track-by="id")
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  computed: mapState({
    productRows: state => chunk(state.products.all, 2)
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="stylus" scoped>
  .row
    padding 1em 0
</style>
