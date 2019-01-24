<template>
  <v-list two-line>
    <template v-for="(item, index) in list">
      <v-list-tile
          :key="item.value.id"
          avatar
          ripple
          @click=""
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.value.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.value.original }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ item.value.timeStamp }}</v-list-tile-action-text>
          <v-icon color="yellow darken-2">
            delete
          </v-icon>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider v-if="index + 1 < list.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState({
        list: 'list'
      })
    },
    methods: {
      ...mapActions([
        'DELETE_URL',
        'UPDATE_URL',
      ]),
    }
  }
</script>

<style scoped>

</style>
