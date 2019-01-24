<template>
  <v-toolbar color="pink" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>TEMPLE-Shortener</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon @click.prevent="SET_IS_SHOW_MODAL(!showModal)">create</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'NHeader',
    computed: {
      ...mapState({
        showModal: 'showModal'
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_MODAL'
      ])
    }
  }
</script>

<style scoped>

</style>
