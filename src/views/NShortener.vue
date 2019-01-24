<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <NHeader></NHeader>
        <NList></NList>
        <NModal></NModal>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import NHeader from '../components/NHeader'
  import NList from '../components/NList'
  import NModal from '../components/NModal'
  import { mapActions } from 'vuex'

  export default {
    components: {
      NList,
      NHeader,
      NModal,
    },
    created () {
      this.FETCH_ITEMS()
    },
    methods: {
      ...mapActions([
        'FETCH_ITEMS',
      ]),
    },
  }
</script>
