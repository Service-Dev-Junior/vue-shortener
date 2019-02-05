<template>
    <v-list two-line>
        <template v-for="(item, index) in list">
            <v-list-tile
                    :key="item.id"
                    avatar
                    ripple
                    @click.stop.prevent="clipboard(item.short_url)"
            >
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.short_url }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.enrolltime }}</v-list-tile-action-text>
                    <v-icon color="yellow darken-2" @click.stop.prevent="remove(item.id)">
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
      ]),
      remove (id) {
        if (!window.confirm('삭제하시겠습니까?')) return
        this.DELETE_URL({ id: id })
      },
      clipboard (text) {
        this.$copyText(text).then(function (e) {
          console.log('Copied')
        }, function (e) {
          console.log(e)
        })
      }
    }
  }
</script>

<style scoped>

</style>
