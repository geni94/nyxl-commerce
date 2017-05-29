<template lang="pug">
  div(class="container shop-container")
    div(class="row mt-2")
      div(class="col-sm-12 sections")
        div(class="category card")
          div.layer
          router-link(to="/shop" tag="a")
            div.card-image
              img(src="./../../assets/9.png")
            div.card-title
              h2 Interior Spaces    
        div(class="category card")
          div.layer
          router-link(to="/shop" tag="a")
            div.card-image
              img(src="./../../assets/57.png")
            div.card-title
              h2 Nyxl Specials    
        div(class="category card")
          div.layer
          router-link(to="/shop" tag="a")
            div.card-image
              img(src="./../../assets/city-lamp1.jpg")
            div.card-title
              h2 Services
    div(class="row mt-2")
      div.col-sm-12
        Personal/
    div(class="row mt-2")
        div.container
          div(class="card card-drop")
            h3 Drop your file here
</template>

<script>
import Personal from './../shared/Personal'

export default {
  name: 'Commerce',
  components: {
    Personal
  }
}
</script>

<style lang="stylus" scoped>
  a
    text-decoration none
    color #333
    &:hover
      text-decoration none
  .sections
    display flex
    flex-direction column
    align-items center
  .category
    position relative
    margin-bottom 5em
    &:nth-child(odd)
      align-self flex-start
      margin-left 15%
    &:nth-child(even)
      align-self flex-end
      margin-right 15%
  .layer
    position absolute
    width 120%
    height 180px
    margin-top 5em
    bottom 0
    z-index 0
    left -10%
    background-image: linear-gradient();
    background linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    background -webkit-linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    background -webkit-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    background -moz-linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    background -ms-linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    background -o-linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
    &:nth-of-type(2)
      align-self flex-end
      right -30px
      // background linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
      // background -webkit-linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
      // background -webkit-gradient(to top, #a8edea 0%, #fed6e3 100%)
      // background -moz-linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
      // background -ms-linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
      // background -o-linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
  .card
    background #fff
    .card-title
      text-align center
      position relative
      z-index 10
    .card-image
      position relative
      z-index 10
      &:hover
        top -15px
        transition top 0.25s
      img
        width 380px
        height auto
</style>
