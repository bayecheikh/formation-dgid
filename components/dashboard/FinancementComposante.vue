<template> 
  <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5 my-5 border-grey">
    <div class="custom-container mt-5">
      <v-row justify="center" class="d-flex justify-content-between">
        <!--<v-col
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
        </v-col>-->

        
        
      </v-row>
      <v-row class="d-flex justify-content-between">
        <v-col md="6" sm="12" lg="6" class="" v-for="bailleur in listbailleurs " :key="bailleur.id">
          <div class="bg-grey mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
            <h1 class="">{{bailleur.libelle}}</h1>
            <h4 class="" v-for="financement in groupeBy(bailleur.financement_sources)" :key="financement.id">{{financement.libelle_secteur+' '}}:{{' '+financement.montant.toLocaleString()+' FCFA'}}</h4>
          </div>
        </v-col>
      </v-row>
      
      <v-row d-flex justify-content-between class="border-grey mt-6">
        <v-col md="6" lg="6" sm="12" class="p-0 ">
            <div class="bg-box-white mr-3 pl-0 pr-0 pt-5 pb-5 border-grey">
                <h2 class="title-chart pl-5 mb-5">Volume par source</h2>
                <div class="pl-5">
                  <div id="volumeSource"></div>
                </div>
            </div>
           <!-- <v-btn
              class="mt-4 mr-4 text-white" color="primary"
              @click="getVolumeSource()"
            >
              Afficher
            </v-btn>-->
        </v-col> 
        <v-col md="6" lg="6" sm="12" class="p-0">
            <div class="bg-box-white pl-0 pr-0 pt-5 pb-5 border-grey">
                <h2 class="title-chart pl-5 mb-5">Volume par composante</h2>
                <div class="pl-5">
                  <div id="volumeComposante"></div>
                </div>
            </div>
            <!--<v-btn
              class="mt-4 mr-4 text-white" color="primary"
              @click="getVolumeComposante()"
            >
              Afficher
            </v-btn>-->
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
      this.$store.dispatch('bailleurs/getList')

      this.getVolumeSource()
      this.getVolumeComposante()
      
    },
    computed: mapGetters({
      listbailleurs: 'bailleurs/listbailleurs',
      listannees: 'annees/listannees',
      listactivites: 'monnaies/listmonnaies',
    }),
    data () {
      return {
        annee:'',
        activite:'',
      }
    },
    methods:{       
      getVolumeSource(){
      this.$dgidApi.$get('/financement_sources')
      .then(async (response) => { 
        this.haschart = true
        console.log('Données reçu financement source+++++++++++',response)
            let {am4core, am4charts,am4themes_animated} = this.$am4core();
            
            // Create chart instance
            var chart = am4core.create("volumeSource", am4charts.XYChart);


            chart.data = [{
              "source": "BAD",
              "montant": 30000000
            }, {
              "source": "AFD",
              "montant": 30000000
            }, {
              "source": "DER",
              "montant": 20000000
            }, {
              "source": "FAD",
              "montant": 10000000
            }];

            // Create axes
            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "source";
            categoryAxis.title.text = "Sources";

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Montant";

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "montant";
            series.dataFields.categoryX = "source";
            series.name = "Sales";
            series.columns.template.tooltipText = "Source: {categoryX}\nMontant: {valueY}";
            series.columns.template.fill = am4core.color("#104547");
            //hide logo
            if(chart.logo) {
              chart.logo.disabled = true;
                    }
            
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
              this.$toast.error(error?.response?.data?.message).goAway(3000)
          }).finally(() => {
            console.log('Requette envoyé ')
          });
      },
      getVolumeComposante(){
      this.$dgidApi.$get('/financement_sources')
      .then(async (response) => { 
        this.haschart = true
        console.log('Données reçu financement source+++++++++++',response)
            let {am4core, am4charts,am4themes_animated} = this.$am4core();
            
            // Create chart instance
            var chart = am4core.create("volumeComposante", am4charts.XYChart);


            chart.data = [{
              "source": "Composante 1",
              "montant": 30000000
            }, {
              "source": "Composante 2",
              "montant": 30000000
            }, {
              "source": "Composante 3",
              "montant": 20000000
            }];

            // Create axes
            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "source";
            categoryAxis.title.text = "Composante";

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Montant";

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = "montant";
            series.dataFields.categoryX = "source";
            series.name = "Sales";
            series.columns.template.tooltipText = "Source: {categoryX}\nMontant: {valueY}";
            series.columns.template.fill = am4core.color("#104547");
            //hide logo
            if(chart.logo) {
              chart.logo.disabled = true;
                    }
            
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
              this.$toast.error(error?.response?.data?.message).goAway(3000)
          }).finally(() => {
            console.log('Requette envoyé ')
          });
      },
      bySource(){
        return this.listfinancement_sources.reduce((acc, financement) => {
          (acc[financement.libelle_source] = acc[financement.libelle_source] || []).push({libelle:financement.libelle_secteur,montant:financement.montant})
          return acc
        }, {})
      },
      async changeAnnee(value) {
      },
      async changeactivite(value) {
         this.updateAtteintActivite2(value)
         //this.updateAttenduActivite2(value)
      },
      onClearClicked () {
       this.annee = ''
       this.activite = ''
       this.getVolumeComposante()
       this.getVolumeSource()
      },
      groupeBy(list){
          var result = [];
          list.reduce(function(res, value) {
            if (!res[value.libelle_secteur]) {
              res[value.libelle_secteur] = { libelle_secteur: value.libelle_secteur, montant: 0 };
              result.push(res[value.libelle_secteur])
            }
            res[value.libelle_secteur].montant += parseInt(value.montant);
            return res;
          }, {});
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })

         return [...result,{ libelle_secteur: 'Total', montant: total }]
      }
    }
  }
</script>
