<template>
  <div style="margin-bottom: 200px">
    <div
        class="white--text headline"
        style="width: 500px; float:left; display: inline-block; cursor: pointer"
        @click.prevent="onClick"
    >TEMPLE URL Shortener
    </div>

    <div style="display: inline-block; float: right">
      <div class="text-xs-center">
        <v-btn round color="white" href="https://github.com/jwooss/vue-shortener" target="_blank">Github</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      onClick() {
        location.href = 'http://wodn4131.cafe24.com/shortener/index.html#/'
      }
    }
  }
</script>

<style scoped>

</style>
