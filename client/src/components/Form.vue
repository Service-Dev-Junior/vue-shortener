<template>
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
        <v-btn round color="primary" large dark>Shorten</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Form'
  }
</script>

<style scoped>

</style>
