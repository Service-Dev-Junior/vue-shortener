<template>
  <div>
    <v-progress-linear v-show="showLoading" :indeterminate="true"></v-progress-linear>
    <v-card class="elevation-12">
      <v-card-text>
        <v-form>
          <v-flex>
            <v-text-field
                @keydown.enter="onSubmitUrl"
                v-model.trim="inputUrl"
                prepend-inner-icon="link"
                label="Solo"
                placeholder="Paste a long url"
                solo
                clearable
                style="font-size: 20pt; padding: 5px"
            ></v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="text-xs-center">

          <v-btn v-if="!isSuccess"
                 round
                 @click.prevent="onSubmitUrl"
                 color="primary"
                 large
                 dark>Shorten
          </v-btn>
          <v-btn v-else
                 round
                 color="success"
                 large
                 v-clipboard:copy="inputUrl"
                 v-clipboard:success="onCopy"
                 dark>Copy
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Form',
    data () {
      return {
        isSuccess: false,
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

        this.toggleLoading()
        this.GET_SHORT_URL(this.inputUrl).then(response => {
          this.toggleLoading()
          if (response.code === 200) {
            this.isSuccess = true
            this.inputUrl = response.data.shortUrl
            this.SET_IS_SHOW_ALERT({
              type: 'success',
              message: '변경이 완료되었습니다. COPY 버튼을 눌러서 주소를 복사해주세요.',
              toggle: true
            })
          } else if (response.code === 500) {
            this.SET_IS_SHOW_ALERT({
              type: 'error',
              message: '변경이 실패되었습니다. 주소를 정확히 입력해주세요.',
              toggle: true
            })
          }
        })
      },
      onCopy () {
        this.isSuccess = false
        this.inputUrl = ''
        this.SET_IS_SHOW_ALERT({
          type: 'info',
          message: '주소가 복사되었습니다.(ctrl + v) ',
          toggle: true
        })
      },
      toggleLoading () {
        this.showLoading = !this.showLoading
      },
    }
  }
</script>

<style scoped>

</style>
