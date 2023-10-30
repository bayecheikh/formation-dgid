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
    data () {
      return {
        model:{
            nom_procedure:"",
            description:"",
            body:""
        }
        
      }
    },
    methods: {
      submit(){
        console.log("Données formulaire ",this.model)
      }
     
    },
  }
</script>