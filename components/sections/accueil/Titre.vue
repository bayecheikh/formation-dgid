
<template>
    <v-row align="center" justify="center">
        <v-col md="12" lg="12" sm="12">
        <h2 align="center" class="custom-h2">{{ titre }}</h2>
        </v-col>
    </v-row>
</template>
  
  <script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    layout: 'layout',
    computed: mapGetters({
      titre: 'accueil/titre'
    }),
    components: {
    },
    data: () => ({
      
    }),
    methods: {
    }
  };
  </script>
  <style scoped>
  .height-38 {
    height: 38px !important;
  }
  .custom-h2 {
    padding: 18px;
    background-color: #995104;
    color: #fff;
    opacity: 0.8;
  }
  .width-800{
    max-width: 800px !important;
  }
  </style>