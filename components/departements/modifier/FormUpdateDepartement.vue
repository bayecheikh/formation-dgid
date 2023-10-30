<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Nom"
            outlined dense
            v-model="model.nom_departement"
            :rules="rules.nom_departementRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Slug"
            outlined dense
            v-model="model.slug"
            :rules="rules.slugRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Latitude"
            outlined dense
            v-model="model.latitude"
            :rules="rules.latitudeRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Longitude"
            outlined dense
            v-model="model.longitude"
            :rules="rules.longitudeRules"
          ></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea
            label="Code SVG"
            outlined dense
            v-model="model.svg"
            :rules="rules.svgRules"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col md="12" lg="12" sm="12" class="my-0 py-0">
          <template>
            <v-card-title class="pl-0 pr-0">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Rechercher une commune"
                outlined
                dense
                hide-details
                clearable
              ></v-text-field>
            </v-card-title>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="listcommunes"
              :loading="listcommunes.length?false:true" 
              loading-text="Loading... Please wait"
              :single-select="singleSelect"
              item-key="nom_commune"
              show-select
              class="elevation-1"
              :search="search"
            >
            </v-data-table>
          </template>
        </v-col>
      </v-row>
      <v-btn
      :loading="loading"
        :disabled="!valid"
        depressed
        class="mr-4 text-white mt-5" color="primary"
        @click="submitForm"
      >
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: {
    },
    mounted: function() {
      this.model.id = this.detaildepartement.id
      this.model.nom_departement = this.detaildepartement.nom_departement
      this.model.slug = this.detaildepartement.slug
      this.model.latitude = this.detaildepartement.latitude
      this.model.longitude = this.detaildepartement.longitude
      this.model.svg = this.detaildepartement.svg
      this.selected = this.detaildepartement?.communes
    },
    computed: mapGetters({
      detaildepartement:'departements/detaildepartement',
      listcommunes: 'communes/listcommunes',
    }),
    data: () => ({
      loading: false,
      message:null,
      color:null,
      valid: true,
      search: '',
      selectedItem: 0,
      valid: true,
      headers : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'nom_commune',
        },
        { text: 'Slug', value: 'slug' }
      ],
      model: {
        id:null,
        nom_departement: '',
        slug: '',
        latitude:'',
        longitude:'',
        svg:''
      },
      rules:{
        nom_departementRules: [
          v => !!v || 'Nom departement est obligatoire',
          v => (v && v.length <= 50) || 'Nom doit etre inférieur à 20 caratères',
        ],
        slugRules: [
          v => !!v || 'Slug est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        this.loading = true;
        let validation = this.$refs.form.validate()
        let selectedcommunes = this.selected.map((item)=>{return item.id})
        console.log('Données formulaire ++++++ : ',{...this.model,communes:selectedcommunes})
        this.loading = false;
        
        validation && this.$dgidApi.put('/departements/'+this.model.id, {...this.model,communes:selectedcommunes})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            this.$router.push('/departements');
          })
          .catch((error) => {
               console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé ')
        });
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
      },
    }
  }
</script>