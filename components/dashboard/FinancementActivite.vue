<template>
  <v-card class="mx-auto mb-5 pl-10 pt-0 pr-10 pb-5 my-10 border-grey">
    <div class="custom-container mt-5">
      
      <v-row justify="center" class="d-flex justify-content-between">
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
          lg="6"
          md="6"
          sm="12"
        >
        <v-autocomplete
                v-model="activite"
                :items="listtrimestres"
                outlined
                dense
                label="Trimestre"
                item-text="libelle"
                item-value="libelle"
                @change="changeactivite"
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
          <h2 class="text-grey">Execution financière par activité </h2>
        </v-col>
        <v-col md="6" sm="12" lg="6" class="border-right-solid">
          <v-row class="d-flex justify-content-between">
            <v-col md="12" sm="12" lg="12" class="">
              <div class="mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h2 class="text-sm-center">Résultats attendus (en Fcfa)</h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="" v-for="activite in modelAttenduActivite" :key="activite.libelle_activite">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">{{activite.libelle_activite}}</h4>
                <h2 class="text-primary mt-2">{{activite.montant.toLocaleString()}}</h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Montant Global</h4>
                <h2 class="text-primary mt-2">{{budgetAttenduActivite.toLocaleString()}}</h2>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" sm="12" lg="6" class="pl-8">
          <v-row class="d-flex justify-content-between">
            <v-col md="12" sm="12" lg="12" class="">
              <div class="mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h2 class="text-sm-center">Résultats atteints (en Fcfa) </h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="" v-for="activite in modelAtteintActivite" :key="activite.libelle_activite">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">{{activite.libelle_activite}}</h4>
                <h2 class="text-primary mt-2">{{activite.montant.toLocaleString()}}</h2>
              </div>
            </v-col>
            <v-col md="6" sm="12" lg="6" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Montant Global</h4>
                <h2 class="text-primary mt-2">{{budgetAtteintActivite.toLocaleString()}}</h2>
              </div>
            </v-col>
            
          </v-row>
        </v-col>             
      </v-row> 
    </div>
  </v-card>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import StatBox from '@/components/dashboard/admin/StatBox';
import { mapMutations, mapGetters } from 'vuex'

  export default {
    layout: "dashboard",
    components: {
      StatBox,
      LeftMenu
    },
    mounted: function() {
      this.$store.dispatch('annees/getList')
      this.$store.dispatch('monnaies/getList')

      this.getFinancementActiviteCible()
      this.getFinancementActiviteResultat()
      
    },
    computed: mapGetters({
      listfinancement_activites: 'financement_activites/listfinancement_activites',
      financement_activites_resultats: 'financement_activites_resultats/listfinancement_activites',
      listannees: 'annees/listannees',
      listtrimestres: 'monnaies/listmonnaies',
    }),
    data () {
      return {
        listresultatAttendusAcivites : [],
        listresultatAtteintsAcivites : [],
        annee:'',
        activite:'',
        modelAtteintActivite:[],
        modelAttenduActivite:[],
        budgetAtteintActivite:0,
        budgetAttenduActivite:0,
      }
    },
    methods:{      
      getFinancementActiviteResultat(){
        this.$dgidApi.$get('/activiteByType/resultat')
        .then(async (response) => { 
          this.listresultatAtteintsAcivites = response.data
          //console.log('Données reçu financement par activité resultat+++++++++++')
          var result = [];
          await response.data.reduce(function(res, value) {
            if (!res[value.libelle_activite]) {
              res[value.libelle_activite] = { libelle_activite: value.libelle_activite, montant: 0 };
              result.push(res[value.libelle_activite])
            }
            res[value.libelle_activite].montant += parseInt(value.montant);
            return res;
          }, {});
          
          this.modelAtteintActivite = result
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })
          this.budgetAtteintActivite = total
          console.log(result)
       

        }).catch((error) => {
            console.log('Code error ++++++: ', error?.response?.data?.message)
            this.$toast.error(error?.response?.data?.message).goAway(3000)
        }).finally(() => {
          console.log('Requette envoyé ')
        });
      },
      getFinancementActiviteCible(){
        this.$dgidApi.$get('/financement_activites')
        .then(async (response) => { 
          this.listresultatAttendusAcivites = response.data
          //console.log('Données reçu financement par activité resultat+++++++++++')
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
         this.updateAtteintActivite(value)
         //this.updateAttenduActivite(value)
      },
      async changeactivite(value) {
         this.updateAtteintActivite2(value)
      },
      async updateAtteintActivite(value) {
        this.annee = value 
          var result = [];
          var list = [];
          if(this.activite!=''){
            list = this.listresultatAtteintsAcivites.filter((item) =>(item.trimestre==this.activite && item.annee==value))
          }
          else{
            list = this.listresultatAtteintsAcivites.filter((item) =>(item.annee==value))
          }
          await list.filter((item) =>(item.annee==value)).reduce(function(res, value) {
            if (!res[value.libelle_activite]) {
              res[value.libelle_activite] = { libelle_activite: value.libelle_activite, montant: 0 };
              result.push(res[value.libelle_activite])
            }
            res[value.libelle_activite].montant += parseInt(value.montant);
            return res;
          }, {});
          
          this.modelAtteintActivite = result
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })
          this.budgetAtteintActivite = total
          console.log(result)
      },
      async updateAttenduActivite(value) {
        this.annee = value 
          var result = [];
          var list = [];
          if(this.activite!=''){
            list = this.listresultatAttendusAcivites.filter((item) =>(item.trimestre==this.activite && item.annee==value))
          }
          else{
            list = this.listresultatAttendusAcivites.filter((item) =>(item.annee==value))
          }
          await list
          .filter((item) =>(item.annee==value)).reduce(function(res, value) {
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
      },
      async updateAtteintActivite2(value) {
        console.log(value)
          this.activite = value 
          var result = [];
          var list = [];
          if(this.annee!=''){
            list = this.listresultatAtteintsAcivites.filter((item) =>(item.trimestre==value && item.annee==this.annee))
          }
          else{
            list = this.listresultatAtteintsAcivites.filter((item) =>(item.trimestre==value))
          }
          await list.filter((item) =>(item.trimestre==value))
          .filter((item) =>(item.trimestre==value)).reduce(function(res, value) {
            if (!res[value.libelle_activite]) {
              res[value.libelle_activite] = { libelle_activite: value.libelle_activite, montant: 0 };
              result.push(res[value.libelle_activite])
            }
            res[value.libelle_activite].montant += parseInt(value.montant);
            return res;
          }, {});
          
          this.modelAtteintActivite = result
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })
          this.budgetAtteintActivite = total
          console.log(result)
      },
      onClearClicked () {
       this.annee = ''
       this.activite = ''
       this.getFinancementActiviteResultat()
       this.getFinancementActiviteCible()
      }
    }
  }
</script>

<style scoped>
</style>
