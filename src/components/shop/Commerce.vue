<template lang="pug">
  div(class="container shop-container")
    div(class="row mt-2")
      div(class="col-sm-9 sections")
        div(class="category card")
          div.card-image
            img(src="./../../assets/9.png")
          div.card-title
            h2 Interior Spaces
        div(class="category card")
          div.card-image
            img(src="./../../assets/56.png")
          div.card-title
            h2 Nyxl Specials
        div(class="category card")
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
  .sections
    display flex
    flex-direction column
    
  .card
    background #fff
    border 1px solid #d3d3d3
    &.category
      border none
      &:nth-child(odd)
        float left
      &:nth-child(even)
        float right
      .card-image
        img
          width 180px
          height auto
</style>
