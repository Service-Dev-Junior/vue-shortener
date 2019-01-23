<template>
  <v-app>
    <ShortenerHeader></ShortenerHeader>
    <ShortenerInput></ShortenerInput>
    <ShortenerList></ShortenerList>
    <ShortenerFooter></ShortenerFooter>
  </v-app>
</template>

<script>
  import ShortenerHeader from './../components/Header'
  import ShortenerInput from './../components/Input'
  import ShortenerList from './../components/List'
  import ShortenerFooter from './../components/Footer'
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState({
        urlItems: 'urlItems',
      })
    },
    created () {
      this.FETCH_ITEMS()
    },
    methods: {
      ...mapActions([
        'FETCH_ITEMS',
      ]),
    },
    components: {
      'ShortenerHeader': ShortenerHeader,
      'ShortenerInput': ShortenerInput,
      'ShortenerList': ShortenerList,
      'ShortenerFooter': ShortenerFooter,
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
