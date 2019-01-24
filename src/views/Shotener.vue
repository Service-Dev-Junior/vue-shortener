<template>
  <v-app>
    <div>
      <v-card>
        <test></test>
        <v-responsive :aspect-ratio="16/9">
          <ShortenerHeader></ShortenerHeader>
          <ShortenerInput></ShortenerInput>
          <ShortenerList></ShortenerList>
          <ShortenerFooter></ShortenerFooter>
        </v-responsive>
      </v-card>
    </div>
  </v-app>
</template>

<script>
  import ShortenerHeader from './../components/Header'
  import ShortenerInput from './../components/Input'
  import ShortenerList from './../components/List'
  import ShortenerFooter from './../components/Footer'
  import test from './NShortener'
  import { mapActions, mapState } from 'vuex'

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
      'test': test,
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
