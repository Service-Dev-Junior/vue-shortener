<template>
    <div style="margin-bottom: 20px">
        <v-alert
                v-model="isShow"
                :type="type"
        >
            {{message}}
        </v-alert>
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'Alert',
    computed: {
      ...mapState({
        isShow: 'isShowAlert',
        message: 'alertMessage',
        type: 'alertType'
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_ALERT',
      ])
    }
  }
</script>

<style scoped>

</style>
