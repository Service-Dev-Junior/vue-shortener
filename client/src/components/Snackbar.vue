<template>
    <v-snackbar
            v-model="isShow"
            :bottom="true"
            :timeout="6000"
    >
        {{message}}
        <v-btn
                color="pink"
                flat
                @click="SET_IS_SHOW_SNACKBER({toggle: false, message: ''})"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Snackbar',
    computed: {
      ...mapState({
        isShow: 'isShowSnackbar',
        message: 'snackbarMessage',
      }),
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_SNACKBER'
      ])
    }
  }
</script>

<style scoped>

</style>