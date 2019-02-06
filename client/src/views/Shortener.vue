<template>
  <!--<v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <NHeader></NHeader>
        <NList></NList>
        <NModal></NModal>
      </v-card>
    </v-flex>
  </v-layout>-->
  <v-app>
    <div style="width:100vw; height:100vh; background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);">
      <Title></Title>
      <Card></Card>
    </div>
  </v-app>
</template>

<script>
  import Card from '../components/Card'
  import Title from '../components/Title'

  export default {
    components: {
      Card,
      Title
    },
    created () {
    },
    methods: {},
  }
</script>

<style scoped>
</style>
