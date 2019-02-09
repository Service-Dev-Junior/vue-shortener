<template>
  <v-app id="inspire">
    <v-content style="width:100vw; height:100vh; background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);">
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8>
            <Header></Header>
            <Title></Title>
            <Progress></Progress>
            <Form></Form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Header from '../components/Header'
  import Form from '../components/Form'
  import Title from '../components/Title'
  import Progress from '../components/Progress'

  export default {
    components: {
      Progress,
      Header,
      Form,
      Title,
    },
    created () {
    },
    methods: {},
  }
</script>

<style scoped>
</style>
