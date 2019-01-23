<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" type="button" @click="clearUrl">Clear All</span>
  </div>
</template>

<script>
  export default {
    methods: {
      clearUrl () {
        this.$emit('removeAll')
      }
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

  .clearAllBtn {
    color: #e20303;
    display: #000000;
  }
</style>
