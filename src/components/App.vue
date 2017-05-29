<template lang="pug">
  div#app
    PageHeader/
    router-view/
</template>
<script>
  import PageHeader from './shared/PageHeader'
  export default {
    name: 'App',
    components: {
      PageHeader
    }
  }
</script>

<style lang="stylus">
  body
    font-family 'Karla', sans-serif
  h1,h2
    font-family 'Nothing You Could Do', cursive
    font-weight 700
  h3
    font-family 'Nothing You Could Do', cursive
    font-weight 300
</style>
