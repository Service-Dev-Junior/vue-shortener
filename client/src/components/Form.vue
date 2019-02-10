<template>
    <div>
        <v-progress-linear :indeterminate="showLoading"></v-progress-linear>
        <v-card class="elevation-12">
            <v-card-text>
                <v-form>
                    <!--<v-text-field
                        prepend-inner-icon="link"
                        name="login"
                        label="Paste a long url"
                        type="text"
                        height="43"
                        style="font-size: 2.0em; padding: 0 10px;"
                    ></v-text-field>-->
                    <v-flex>
                        <v-text-field
                                @keydown.enter="onSubmitUrl"
                                v-model.trim="inputUrl"
                                prepend-inner-icon="link"
                                label="Solo"
                                placeholder="Paste a long url"
                                solo
                        ></v-text-field>
                    </v-flex>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="text-xs-center">
                    <v-btn round
                           @click.prevent="onSubmitUrl"
                           color="primary"
                           large
                           dark>Shorten
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Form',
    data () {
      return {
        inputUrl: '',
        showLoading: false
      }
    },
    methods: {
      ...mapMutations([
        'SET_IS_SHOW_SNACKBER',
        'SET_IS_SHOW_ALERT',
      ]),
      ...mapActions([
        'GET_SHORT_URL'
      ]),
      onSubmitUrl () {
        if (!this.inputUrl) {
          this.SET_IS_SHOW_SNACKBER({ toggle: true, message: 'URL을 입력해주세요' })
          return
        }

        if (!/(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/.test(this.inputUrl)) {
          this.SET_IS_SHOW_SNACKBER({ toggle: true, message: 'URL 형식에 맞지 않습니다' })
          return
        }

        this.showLoading = !this.showLoading
        this.GET_SHORT_URL(this.inputUrl).then(_ => {
          this.SET_IS_SHOW_ALERT({
            type: 'info',
            message: '변경이 완료되었습니다. COPY 버튼을 눌러서 주소를 복사해주세요.',
            toggle: true
          })
        }).always(_ => this.showLoading = !this.showLoading)
        //변경이 실패되었습니다. 주소를 정확히 입력해주세요.
        // 변경이 완료되었습니다. COPY 버튼을 눌러서 주소를 복사해주세요.
        //주소가 복사되었습니다.
      }
    }
  }
</script>

<style scoped>

</style>
