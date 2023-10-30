<template>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{detailProcedure.nom_procedure}}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{detailProcedure.description}}
          </v-list-item-title>
          <v-list-item-subtitle>{{detailProcedure.body}}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          @click="retour()"
        >
          Retour à la liste
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
<script>
export default {
    data () {
      return {
        id : this.$nuxt._route.params.id,
        detailProcedure : {
            id:1,
            nom_procedure: 'Quitus fiscal',
            description: 'Demande de quitus fiscal',
            body: 'Demande de quitus fiscal',
        }
      }
    },
    methods: {
      retour(){
        this.$router.push('/procedures');
      }
     
    },
  }
</script>
