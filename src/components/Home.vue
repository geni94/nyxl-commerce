<template lang="pug">
div.main
  div(class="container carousel-container")
    carousel(:perPage='1' :autoplay="false" easing="linear" :navigationEnabled="true")
      slide
        img(src="./../assets/9.png")
        div(class="card card-hover")
          div.card-block
            h1.card-title A holistic Approach to Design
            hr/
      slide
        img(src="./../assets/44.png")
        div(class="card card-hover hover-alt")
          div.card-block
            h2.card-title Fantastic Interiors and Handy Utilities
            hr/
      slide
        img(src="./../assets/51.png")
      slide
        img(src="./../assets/26.png")
  div(class="container cat-container")
    mixin category-card(title, header)
      div(class="card card-cat")
        div.container
          div.cat-header
            h4= header
          div.cat-title
            h1= title
          div.icon
            img(src='./../assets/right-chevron.svg')
    +category-card("The Story", "I'd like to know", "/")
    +category-card("Products", "I'm into your", "/shop")
    +category-card("360 Tours", "Just wanna have some fun in your")
    //- +category-card('Frequently Asked Questions', 'More answers in', "/faq")
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    name: 'Home',
    components: {
      Carousel,
      Slide
    }
  }
</script>
<style lang="stylus" scoped>
  .main
    display flex
    flex-direction column
    justify-content center
    overflow hidden
    width 100%
  .carousel-container
    margin 3em 0 0
    padding 0
    height 80vh
    width 100%
    background-color #6bb6ff
    img
      height 90vh
      width 100vw
      margin 0
      padding 0
  .card-hover
    position absolute
    top 5em
    right 4em
    background-color #fff
    opacity 0.75
    &:hover
      opacity 1
      transition 0.25s ease
    hr
      height 3px
      width 100%
      background-color black
    &.hover-alt
      position relative
      margin-top -15em
      margin-left 50%
      width 35%
      hr
        height 3px
        width 100%
        background-color yellow
  .cat-container
    display flex
    justify-content center
    bottom 0
    position relative
    z-index 10
    margin 10em 0 0
    width 100%
    // .row
    //   display flex
    //   justify-content flex-start
    //   padding-left 5%
  .card-cat
    color #fff
    width 30%
    min-height 200px
    border none
    padding 1em
    position relative
    cursor pointer
    &:hover
      background darken(grey, 40%) !important
      top -10px
      transition all 0.3s ease-in-out
    .container
      height 100%
      display flex
      flex-direction column
      justify-content center
    .cat-header
      position absolute
      top 1rem
    h4
      font-size 1rem
      font-weight 300
    h1
      font-size 3.5rem
      font-weight 100
      max-width 85%
      font-family 'Raleway'
    div.icon
      position absolute
      height 100%
      width 100px
      right 0
      top 0
      img
        height inherit
        width inherit
    &:nth-of-type(1)
        margin-right 1em
        background linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
        background -moz-linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
        background -webkit-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
        background -webkit-linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
        background -ms-linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
        background -o-linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)

        // background linear-gradient(45deg, rgba(242,216,69,1) 0%, rgba(242,216,69,1) 7%, rgba(4,148,196,1) 46%, rgba(66,63,112,1) 100%)
      &:nth-of-type(2)
        margin-right 1em
        background rgba(254,182,69,1)
        background linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        background -webkit-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        background -webkit-linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        background -moz-linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        backgorund -o-linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        background -ms-linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
        
        // background linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
      &:nth-of-type(3)
        background -moz-linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        background -webkit-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        background -webkit-linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        background -o-linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        background -ms-linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        background linear-gradient(to right, rgba(254,182,69,1) 0%, rgba(254,182,69,1) 3%, rgba(254,182,69,1) 22%, rgba(242,216,69,1) 51%, rgba(241,231,103,1) 99%, rgba(241,231,103,1) 100%)
        h1
          font-size 2.5rem
</style>
