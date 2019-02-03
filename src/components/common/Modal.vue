<template>
    <v-layout row justify-center>
        <v-dialog v-model="showModal" persistent max-width="400px">
            <v-card>
                <v-card-title>
                    <span class="headline">URL 등록하기</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field
                                        v-model.trim="newTitle"
                                        prepend-icon="place"
                                        label="타이틀"
                                        clearable
                                        counter="20"
                                        @keyup.enter="register"
                                        required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        v-model.trim="newUrl"
                                        prepend-icon="place"
                                        label="URL 주소"
                                        clearable
                                        @keyup.enter="register"
                                        required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat
                           @click="SET_IS_SHOW_MODAL(!showModal)">취소
                    </v-btn>
                    <v-btn color="blue darken-1" flat @click="register">등록</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  export default {
    data () {
      return {
        newTitle: '',
        newUrl: '',
      }
    },
    computed: {
      ...mapState({
        showModal: 'showModal'
      })
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_MODAL'
      ]),
      ...mapActions([
        'ADD_URL'
      ]),
      register () {
        if (this.newTitle === '' || this.newUrl === '') return

        let newItem = {
          title: this.newTitle,
          url: this.newUrl,
        }

        this.ADD_URL(newItem).then(_ => {
          this.clearInput()
        })
      },
      clearInput () {
        this.newTitle = ''
        this.newUrl = ''
      }
    }
  }
</script>

<style scoped>

</style>
