<template>
  <v-card class="mx-auto mb-5 pl-10 pt-0 pr-10 pb-5 my-10 border-grey">
    <div class="custom-container mt-5">
      
      <v-row justify="center" class="d-flex justify-content-between">
        <v-col
          lg="8"
          md="8"
          sm="12"
          class="text-sm-center"
        ></v-col>
        <v-col
          lg="2"
          md="2"
          sm="12"
          class="text-sm-center"
        >
        <v-autocomplete
                v-model="annee"
                :items="listannees"
                outlined
                dense
                label="Année"
                item-text="libelle"
                item-value="libelle"
                @change="changeAnnee"
              >
          </v-autocomplete>
        </v-col>
        <v-col
          lg="2"
          md="2"
          sm="12"
          
        >
        <v-btn text @click="onClearClicked" rounded color="green">Afficher tout</v-btn>
        </v-col>

        
        
      </v-row>
      <v-row class="d-flex justify-content-between">
        <v-col md="12" sm="12" lg="12" class="text-sm-center bg-grey-2">
          <h2 class="text-grey">{{this.budgetAttenduActivite && this.budgetAttenduActivite.toLocaleString()+' '}}FCFA</h2>
        </v-col>
        <v-col md="6" sm="12" lg="6" class="border-right-solid">
          <v-row class="d-flex justify-content-between">
            <v-col md="12" sm="12" lg="12" class="">
              <div class="mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h2 class="text-sm-center">Résultats attendus - Fin de projet</h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Initiatives entreprenariales financées</h4>
                <h1 class="text-primary">{{this.model.Ind_1_2 && this.model.Ind_1_2.toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entrepreneurs formalisés</h4>
                <h1 class="text-primary">{{this.model.Ind_R_1_2_1 && this.model.Ind_R_1_2_1.toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="12" sm="12" lg="12" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Emplois direst et indirect créés dont 60% destinés aux femmes</h4>
                <h1 class="text-primary">{{this.model.Ind_R_1_1_2 && this.model.Ind_R_1_1_2.toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entrepreneur formés dont plus de 15 000 femmes</h4>
                <h1 class="text-primary">{{this.model.Ind_R_1_1_1 && this.model.Ind_R_1_1_1.toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entreprises accompagnées à la transformation digitale dont 50% détenus par des femmes</h4>
                <h1 class="text-primary">{{this.model.Ind_2_2 && this.model.Ind_2_2.toLocaleString()}}</h1>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" sm="12" lg="6" class="pl-8">
          <v-row class="d-flex justify-content-between">
            <v-col md="12" sm="12" lg="12" class="">
              <div class="mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h2 class="text-sm-center">Résultats atteints</h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Initiatives entreprenariales financées</h4>
                <h1 class="text-primary">{{(this.modelAtteint.Ind_R_2_2_1 && this.modelAtteint.Ind_R_1_2_1) && (this.modelAtteint.Ind_R_2_2_1+this.modelAtteint.Ind_R_1_2_1).toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entrepreneurs formalisés</h4>
                <h1 class="text-primary">{{(this.modelAtteint.Ind_R_1_1_2) && (this.modelAtteint.Ind_R_1_1_2).toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="12" sm="12" lg="12" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Emplois direct et indirect créés dont 60% destinés aux femmes</h4>
                <h1 class="text-primary">{{(this.modelAtteint.Ind_1_2 && this.modelAtteint.Ind_2_2) && (this.modelAtteint.Ind_1_2+this.modelAtteint.Ind_2_2).toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entrepreneur formés dont plus de 15 000 femmes</h4>
                <h1 class="text-primary">{{(this.modelAtteint.Ind_R_1_1_1 && this.modelAtteint.Ind_R_2_1_1) && (this.modelAtteint.Ind_R_1_1_1+this.modelAtteint.Ind_R_2_1_1).toLocaleString()}}</h1>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Entreprises accompagnées à la transformation digitale dont 50% détenus par des femmes</h4>
                <h1 class="text-primary">{{(this.model.Ind_2_2) && (this.model.Ind_2_2).toLocaleString()}}</h1>
              </div>
            </v-col>
          </v-row>
        </v-col>
        
      </v-row>
      

        
    </div>
  </v-card>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

  export default {
    layout: "dashboard",
    components: {
    },
    mounted: function() {
      this.$store.dispatch('annees/getList')
      this.getFinancementActiviteCible()
      this.getResultatAttendu()
      this.getResultatAtteint()
      
    },
    computed: mapGetters({
      listannees: 'annees/listannees'
    }),
    data () {
      return {
        budgetAttenduActivite:'',
        listresultatAttendus : [],
        listresultatAtteints : [],
        annee:'',
        activite:'',
        model:{},
        modelAtteint:{}
      }
    },
    methods:{
      getResultatAttendu(){
      this.$dgidApi.$get('/resultat_attendus')
      .then(async (response) => { 
        console.log('Données reçu resulat+++++++++++',response)
            this.listresultatAttendus = response.data
            let Ind_1_2 = 0
            let Ind_R_1_2_1 = 0
            let Ind_R_1_1_2 = 0
            let Ind_R_1_1_1 = 0
            let Ind_2_2 = 0 
            response.data.map((item)=>{
              
              Ind_1_2=parseInt(Ind_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_2)
              Ind_R_1_2_1=parseInt(Ind_R_1_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_1)
              Ind_R_1_1_2=parseInt(Ind_R_1_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_1_1_1=parseInt(Ind_R_1_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_1)
              Ind_2_2=parseInt(Ind_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_2)

            })
            this.model = {      
              "Ind_1_2" : Ind_1_2,
              "Ind_R_1_2_1" : Ind_R_1_2_1,
              "Ind_R_1_1_2" : Ind_R_1_1_2,
              "Ind_R_1_1_1" : Ind_R_1_1_1,
              "Ind_2_2" : Ind_2_2,
              "total": Ind_1_2+Ind_R_1_2_1+Ind_R_1_1_2+Ind_R_1_1_1+Ind_2_2
            }
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
          }).finally(() => {
            console.log('Requette envoyé ')
          });
      },
      getResultatAtteint(){
      this.$dgidApi.$get('/allSectoriel')
      .then(async (response) => { 
        console.log('Données reçu resulat atteint -------- +++++++++++',response)
            this.listresultatAtteints = response.data
            let Ind_1 =0
            let Ind_2 =0
            let Ind_1_1 =0
            let Ind_2_1=0
            let Ind_R_3_1_1=0
            let Ind_R_3_1_2 =0
            let Ind_R_3_2_1 =0
            let Ind_R_3_2_2=0

            let Ind_1_2=0
            let Ind_R_1_2_1=0
            let Ind_R_1_1_2=0
            let Ind_R_1_1_1 = 0
            let Ind_2_2 =0
            let Ind_R_1_2_2 =0
            let Ind_R_2_2_2 =0
            let Ind_R_2_2_1=0 	 
            let Ind_R_2_1_1=0 
            response.data.map((item)=>{
              console.log("item questionnaire Ind 1 2-------------- ",JSON.parse(item.questionnaire)?.Ind_1_2)

              Ind_1=parseInt(Ind_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_1)
              Ind_2=parseInt(Ind_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2)
              Ind_1_1=parseInt(Ind_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_1)
              Ind_2_1=parseInt(Ind_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_1)
              Ind_R_3_1_1=parseInt(Ind_R_3_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_1_1)

              Ind_R_3_1_2=parseInt(Ind_R_3_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_1_2)
              Ind_R_3_2_1=parseInt(Ind_R_3_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_2_1)
              Ind_R_3_2_2=parseInt(Ind_R_3_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_2_2)

              Ind_1_2=parseInt(Ind_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_2)
              Ind_R_1_2_1=parseInt(Ind_R_1_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_1)
              Ind_R_1_1_2=parseInt(Ind_R_1_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_1_1_1=parseInt(Ind_R_1_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_1)
              Ind_2_2=parseInt(Ind_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_2)

              Ind_R_1_2_2=parseInt(Ind_R_1_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_2)
              Ind_R_2_2_2=parseInt(Ind_R_2_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_2_2_2)
              Ind_R_2_2_1=parseInt(Ind_R_2_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_2_1_1=parseInt(Ind_R_2_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_2_1_1)

            })
            this.modelAtteint = {      
              "Ind_1" : Ind_1,
              "Ind_2" : Ind_2,
              "Ind_1_1" : Ind_1_1,
              "Ind_2_1" :Ind_2_1,
              "Ind_R_3_1_1" :Ind_R_3_1_1,
              "Ind_R_3_1_2" : Ind_R_3_1_2,
              "Ind_R_3_2_1" : Ind_R_3_2_1,
              "Ind_R_3_2_2" : Ind_R_3_2_2 ,

              "Ind_1_2" : Ind_1_2,
              "Ind_R_1_2_1" :Ind_R_1_2_1,
              "Ind_R_1_1_2" :Ind_R_1_1_2,
              "Ind_R_1_1_1" :Ind_R_1_1_1,
              "Ind_2_2" :Ind_2_2,
              "Ind_R_1_2_2" :Ind_R_1_2_2,
              "Ind_R_2_2_2" : Ind_R_2_2_2,
              "Ind_R_2_2_1" :Ind_R_2_2_1, 	
              "Ind_R_1_1_1" :Ind_R_1_1_1, 
              "Ind_R_2_1_1" :Ind_R_2_1_1
            }
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
          }).finally(() => {
            console.log('Requette envoyé ')
          });
      },
      getFinancementActiviteCible(){
        this.$dgidApi.$get('/financement_activites')
        .then(async (response) => { 
          var result = [];
          await response.data.reduce(function(res, value) {
            if (!res[value.libelle_activite]) {
              res[value.libelle_activite] = { libelle_activite: value.libelle_activite, montant: 0 };
              result.push(res[value.libelle_activite])
            }
            res[value.libelle_activite].montant += parseInt(value.montant);
            return res;
          }, {});
          this.modelAttenduActivite = result
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })
          this.budgetAttenduActivite = total
          console.log(result)
       

        }).catch((error) => {
            console.log('Code error ++++++: ', error?.response?.data?.message)
            this.$toast.error(error?.response?.data?.message).goAway(3000)
        }).finally(() => {
          console.log('Requette envoyé ')
        });
      },
      async changeAnnee(value) {
         this.updateAttendu(value)
         this.updateAtteint(value)
      },
      async updateAttendu(value) {
          this.annee = value 
            let Ind_1_2 = 0
            let Ind_R_1_2_1 = 0
            let Ind_R_1_1_2 = 0
            let Ind_R_1_1_1 = 0
            let Ind_2_2 = 0 
            this.listresultatAttendus.filter((item) =>(item.annee==value)).map((item)=>{
              console.log("item questionnqire Ind 1 2-------------- ",JSON.parse(item.questionnaire)?.Ind_1_2)
              Ind_1_2=parseInt(Ind_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_2)
              Ind_R_1_2_1=parseInt(Ind_R_1_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_1)
              Ind_R_1_1_2=parseInt(Ind_R_1_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_1_1_1=parseInt(Ind_R_1_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_1)
              Ind_2_2=parseInt(Ind_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_2)

            })
            this.model = {      
              "Ind_1_2" : Ind_1_2,
              "Ind_R_1_2_1" : Ind_R_1_2_1,
              "Ind_R_1_1_2" : Ind_R_1_1_2,
              "Ind_R_1_1_1" : Ind_R_1_1_1,
              "Ind_2_2" : Ind_2_2,
              "total": Ind_1_2+Ind_R_1_2_1+Ind_R_1_1_2+Ind_R_1_1_1+Ind_2_2
            }    
      },
      async updateAtteint(value) {
          this.annee = value 
          let Ind_1 =0
            let Ind_2 =0
            let Ind_1_1 =0
            let Ind_2_1=0
            let Ind_R_3_1_1=0
            let Ind_R_3_1_2 =0
            let Ind_R_3_2_1 =0
            let Ind_R_3_2_2=0

            let Ind_1_2=0
            let Ind_R_1_2_1=0
            let Ind_R_1_1_2=0
            let Ind_R_1_1_1 = 0
            let Ind_2_2 =0
            let Ind_R_1_2_2 =0
            let Ind_R_2_2_2 =0
            let Ind_R_2_2_1=0 	 
            let Ind_R_2_1_1=0  
            this.listresultatAtteints.filter((item) =>(item.annee==value)).map((item)=>{
              console.log("item questionnaire Ind 1 2-------------- ",JSON.parse(item.questionnaire)?.Ind_1_2)

              Ind_1=parseInt(Ind_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_1)
              Ind_2=parseInt(Ind_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2)
              Ind_1_1=parseInt(Ind_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_1)
              Ind_2_1=parseInt(Ind_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_1)
              Ind_R_3_1_1=parseInt(Ind_R_3_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_1_1)

              Ind_R_3_1_2=parseInt(Ind_R_3_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_1_2)
              Ind_R_3_2_1=parseInt(Ind_R_3_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_2_1)
              Ind_R_3_2_2=parseInt(Ind_R_3_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_3_2_2)

              Ind_1_2=parseInt(Ind_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_1_2)
              Ind_R_1_2_1=parseInt(Ind_R_1_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_1)
              Ind_R_1_1_2=parseInt(Ind_R_1_1_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_1_1_1=parseInt(Ind_R_1_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_1)
              Ind_2_2=parseInt(Ind_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_2_2)

              Ind_R_1_2_2=parseInt(Ind_R_1_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_2_2)
              Ind_R_2_2_2=parseInt(Ind_R_2_2_2)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_2_2_2)
              Ind_R_2_2_1=parseInt(Ind_R_2_2_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_1_1_2)
              Ind_R_2_1_1=parseInt(Ind_R_2_1_1)+parseInt(JSON.parse(item.questionnaire)?.Ind_R_2_1_1)

            })
            this.modelAtteint = {      
              "Ind_1" : Ind_1,
              "Ind_2" : Ind_2,
              "Ind_1_1" : Ind_1_1,
              "Ind_2_1" :Ind_2_1,
              "Ind_R_3_1_1" :Ind_R_3_1_1,
              "Ind_R_3_1_2" : Ind_R_3_1_2,
              "Ind_R_3_2_1" : Ind_R_3_2_1,
              "Ind_R_3_2_2" : Ind_R_3_2_2 ,

              "Ind_1_2" : Ind_1_2,
              "Ind_R_1_2_1" :Ind_R_1_2_1,
              "Ind_R_1_1_2" :Ind_R_1_1_2,
              "Ind_R_1_1_1" :Ind_R_1_1_1,
              "Ind_2_2" :Ind_2_2,
              "Ind_R_1_2_2" :Ind_R_1_2_2,
              "Ind_R_2_2_2" : Ind_R_2_2_2,
              "Ind_R_2_2_1" :Ind_R_2_2_1, 	
              "Ind_R_1_1_1" :Ind_R_1_1_1, 
              "Ind_R_2_1_1" :Ind_R_2_1_1
            }  
      },
      onClearClicked () {
       this.annee = ''
       this.activite = ''
       this.getResultatAttendu()
       this.getResultatAtteint()
      },
    }
  }
</script>

<style scoped>
</style>
