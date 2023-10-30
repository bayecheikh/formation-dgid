<template>
  <v-app id="inspire">
    <v-main class="">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
  import AppToolbar from '@/components/AppToolbar'
  export default {
    components: {
      AppToolbar
    }
  }
</script>

<style scoped>
.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1600px;
}
</style>