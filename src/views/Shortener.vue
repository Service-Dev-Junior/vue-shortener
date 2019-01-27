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
  import NHeader from '../components/layouts/Header'
  import NList from '../components/ItemList'
  import NModal from '../components/common/Modal'
  import { mapActions } from 'vuex'

  export default {
    components: {
      NList,
      NHeader,
      NModal,
    },
    created () {
      //this.FETCH_ITEMS()
      this.TEST_API()
    },
    methods: {
      ...mapActions([
        'FETCH_ITEMS',
        'TEST_API',
      ]),
    },
  }
</script>
