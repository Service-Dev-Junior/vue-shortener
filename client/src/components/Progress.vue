<template>
  <div style="margin-bottom: 20px">
    <v-progress-linear :indeterminate="true"></v-progress-linear>
    <v-alert
        :value="true"
        type="success"
    >
      변경이 완료되었습니다. COPY 버튼을 눌러서 주소를 복사해주세요.
    </v-alert>

    <v-alert
        :value="true"
        type="info"
    >
      주소가 복사되었습니다.
    </v-alert>

    <v-alert
        :value="true"
        type="error"
    >
      변경이 실패되었습니다. 주소를 정확히 입력해주세요.
    </v-alert>
  </div>
</template>

<script>
  export default {
    name: 'Progress'
  }
</script>

<style scoped>

</style>
