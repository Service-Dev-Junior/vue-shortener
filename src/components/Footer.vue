<template>
  <div>
    <div class="clearAllContainer">
      <v-btn color="error" @click.prevent="CLEAR_URL">전부 삭제</v-btn>
    </div>
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
    border-radius: 5px;
    margin: 0 auto;
  }

</style>
