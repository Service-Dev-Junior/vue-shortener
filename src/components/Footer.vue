<template>
  <div class="clearAllContainer">
    <v-btn color="warning" @click.prevent="CLEAR_URL">전부 삭제</v-btn>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'CLEAR_URL'
      ]),
    }
  }
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

</style>
