<template>
    <div>
        <v-text-field
                v-model="model.nom_procedure"
                label="Nom de la procedure"
                readonly
            ></v-text-field>
            <v-text-field
                v-model="model.description"
                label="Description"
            ></v-text-field>
            <v-text-field
                v-model="model.body"
                label="Body"
            ></v-text-field>
            <v-btn
              class="mr-4"
              type="submit"
              @click="submit()"
            >
              submit
            </v-btn>
         
    </div>
          
            
      </template>
    <script>
    export default {
        mounted: function() {
         this.getDetail()
        },
        data () {
          return {
            id : this.$nuxt._route.params.id,
            
            model:{
                nom_procedure:"",
                description:"",
                body:""
            }
            
          }
        },
        methods: {
          getDetail(){
            let detailProcedure = {
                id:1,
                nom_procedure: 'Quitus fiscal',
                description: 'Demande de quitus fiscal',
                body: 'Demande de quitus fiscal',
            }
            this.model = detailProcedure
          },
          submit(){
            console.log("Données formulaire ",this.model)
          }
         
        },
      }
    </script>