<template lang="pug">
  nav(class="navbar navbar-light bg-faded")
    ul.menu-list
      li
        router-link(to="/" tag="a") Home
      li
        router-link(to="/commerce" tag="a") Shop
      li 
        img(src="./../../assets/logo.png" class="logo")  
      li
        a Tours
      li
        a Contact
</template>

<script>
// import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
// import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageHeader'
  // computed: {
  //   ...mapState({
  //     profile: state => state.profile.data
  //   }),
  //   fullName () {
  //     return `${this.profile.firstName} ${this.profile.lastName}`
  //   }
  // },
  // methods: mapActions([
  //   'getProfile'
  // ]),
  // components: { ShoppingCartLimit },
  // created () {
  //   this.getProfile()
  // }
}
</script>

<style lang="stylus" scoped>
  nav
    background-color transparent
    top 0
  .logo
    height 66px
    width 66px
    &:hover
      border-bottom none
  ul.menu-list
    display inline-flex
    list-style none
    position absolute
    left calc(50% - 345px)
    top 0
    z-index 99
    li
      padding 0 2em
      display flex
      align-items center
      a
        font-size 22px
        font-weight 100
        font-family 'Barrio', cursive
        text-decoration none
        color #000
        text-transform uppercase
        cursor pointer
        &:hover
          border-bottom 3px solid #f2d845
</style>
