<template>
    <div>
        <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="ajouterItem()"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="procedures"
      :items-per-page="5"
      class="elevation-1 custom-class"
    >

    <template v-slot:[`item.actions`]="{ item }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on" @click="visualiserItem(item)">
              Detail
        </v-btn>
    </template>
</v-data-table>
    </div>
    
</template>
  <script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Nom de la procedure', value: 'nom_procedure' },
          { text: 'Description', value: 'description' },
          { text: 'Detail', value: 'body' },
          { text: 'Actions', value: 'actions' },
        ],
        procedures: [
          {
            id:1,
            nom_procedure: 'Quitus fiscal',
            description: 'Demande de quitus fiscal',
            body: 'Demande de quitus fiscal',
          },{
            id:2,
            nom_procedure: 'Attestation de nom imposition',
            description: 'Attestation de nom imposition',
            body: 'Attestation de nom imposition',
          },{
            id:3,
            nom_procedure: 'Certificat',
            description: 'Demande de quitus fiscal',
            body: 'Demande de quitus fiscal',
          }
        ],
      }
    },
    methods: {
      visualiserItem (item) {
        console.log("Detail procedure ",item)
        this.$router.push('/procedures/detail/'+item.id);
    },
    ajouterItem () {
        this.$router.push('/procedures/addProcedure');
    },
  }}
</script>