<template lang="pug">
  div(class="card text-xs-center")
    div.photo
      img(src='https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg')
    div.description
      h2 {{product.title}}
      h4 Stylish house trend
      h1 {{product.price | formatMoney}}
      p.description Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue &amp; red ribbom and butterfly pick
      button Add to Cart
      button Share
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="stylus" scoped>
  .card
    display flex
    background #fff
    margin 1em auto
    min-height 400px
    box-shadow 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
    transition all 0.3s
    align-items center
    &:hover
      box-shadow 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)
    .description
      font-weight 300
      text-align left
    .header
      align-self flex-start
    h1 
      color #515151
      font-weight 300
      padding-top 10px
    h2 
      color #515151
      text-transform uppercase
      font-weight 300
    button
      outline 0
      border 1px solid #d9d9d9
      background none
      margin 0 15px 15px 0
      text-transform uppercase
      transition all 0.3 ease
      font-weight 100
      &:hover
        border 1px solid #aedaa6
        cursor pointer
        background darken(white, 2%)  
    .photo
      display flex
      flex-direction column
      justify-content center
</style>
