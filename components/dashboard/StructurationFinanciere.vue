<template>
  <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5 my-10 border-grey">
    <v-row justify="center" class="d-flex justify-content-between">
      <!--<v-col
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
    <v-row>
      <v-col md="12" sm="12" lg="12" class="text-sm-center bg-grey-2 mb-5 mt-5">
        <h2 class="text-grey">{{this.budgetAtteintActivite && this.budgetAtteintActivite.toLocaleString()+' '}}FCFA</h2>
      </v-col>
      <v-col class="border-grey mr-4">
          <v-data-table
          :headers="headerfinancement_activites"
          :items="modelAtteintActivite"
          :single-select="singleSelect"
          item-key="id"
          :items-per-page="perpage"
          class="flat pt-4"
          :loading="progress"
          loading-text="Loading... Please wait"
          hide-default-footer
          :search="search"
        >
          <template v-slot:[`item.montant`]="{ item }">
            {{ (item.montant.toLocaleString() || 0 )+'  FCFA'}}
          </template>
        </v-data-table>
      </v-col>
      
      <v-col class="border-grey">
        <v-data-table
          :headers="headerfinancement_sources"
          :items="modelAtteintSource"
          :single-select="singleSelect"
          item-key="id"
          :items-per-page="perpage"
          class="flat pt-4"
          :loading="progress"
          loading-text="Loading... Please wait"
          hide-default-footer
          :search="search"
        >
          <template v-slot:[`item.montant`]="{ item }">
              {{ (item.montant.toLocaleString() || 0 )+'  FCFA'}}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row d-flex justify-content-between class="border-grey mt-6">
        <v-col md="6" lg="6" sm="12" class="p-0 ">
            <div class="bg-box-white mr-3 pl-0 pr-0 pt-5 pb-5 border-grey">
                <h2 class="title-chart pl-5 mb-5">Répartition par activité</h2>
                <div class="pl-5">
                  <div id="repartitionActivite" ref="repartitionActivite"></div>
                </div>
            </div>
            <!--<v-btn
              class="mt-4 mr-4 text-white" color="primary"
              @click="getFinancementActivite()"
            >
              Afficher
            </v-btn>-->
        </v-col> 
        <v-col md="6" lg="6" sm="12" class="p-0">
            <div class="bg-box-white pl-0 pr-0 pt-5 pb-5 border-grey">
                <h2 class="title-chart pl-5 mb-5">Répartition par source</h2>
                <div class="pl-5">
                  <div id="repartitionSource"></div>
                </div>
            </div>
           <!-- <v-btn
              class="mt-4 mr-4 text-white" color="primary"
              @click="getFinancementSource()"
            >
              Afficher
            </v-btn>-->
        </v-col>
    </v-row>
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

      this.$store.dispatch('financement_activites/getList')
      this.$store.dispatch('financement_sources/getList')

      this.getFinancementSource()
      this.getFinancementActiviteResultat()
      
    },
    computed: mapGetters({
      listannees: 'annees/listannees',
      listactivites: 'monnaies/listmonnaies',

      listfinancement_activites: 'financement_activites/listfinancement_activites',
      listfinancement_sources: 'financement_sources/listfinancement_sources'   
    }),
    data () {
      return {
        selectedAnnee:'',
        haschart:false,
        listresultatAttendus : [],
        listresultatAtteints : [],

        listresultatAttendusAcivites : [],
        listresultatAtteintsAcivites : [],
        annee:'',
        activite:'',
        modelAtteintActivite:[],
        modelAttenduActivite:[],
        budgetAtteintActivite:0,
        budgetAttenduActivite:0,

        modelAtteintSource:[],
        budgetAtteintSource:0,

        headerfinancement_activites : [
        {
            text: 'Répartition par activités',
            align: 'start',
            sortable: true,
            value: 'libelle_activite',
        },
        {
            text: 'Montants',
            align: 'start',
            sortable: true,
            value: 'montant',
        }
        ],
        headerfinancement_sources : [
        {
            text: 'Sources',
            align: 'start',
            sortable: true,
            value: 'libelle_source',
        },
        {
            text: 'Part',
            align: 'start',
            sortable: true,
            value: 'montant',
        }
      ],
      headerfinancement_sources_2 : [
        {
            text: '',
            align: 'start',
            sortable: true,
            value: 'libelle_source',
        },
        {
            text: '',
            align: 'start',
            sortable: true,
            value: 'libelle_secteur',
        },
        {
            text: 'Part',
            align: 'start',
            sortable: true,
            value: 'montant',
        }
      ],
        annee:'',
        activite:'',
      }
    },
    methods:{
      getFinancementActiviteResultat(){
        this.$dgidApi.$get('/financement_activites')
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
          this.modelAtteintActivite = [...result,{ libelle_activite: 'Total', montant: total }]
          //Chert
          let {am4core, am4charts,am4themes_animated} = this.$am4core();
            // Set theme
            am4core.useTheme(am4themes_animated);

            // Create chart instance
            var chart = am4core.create("repartitionActivite", am4charts.PieChart);

            // Add data
            chart.data = result

            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "montant";
            pieSeries.dataFields.category = "libelle_activite";

            // Let's cut a hole in our Pie chart the size of 40% the radius
            chart.innerRadius = am4core.percent(40);

            // Put a thick white border around each Slice
            pieSeries.slices.template.stroke = am4core.color("#4a2abb");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;

            //hide logo
            if(chart.logo) {
              chart.logo.disabled = true;
                    }


            // Add a legend
            chart.legend = new am4charts.Legend();
       

        }).catch((error) => {
            console.log('Code error ++++++: ', error?.response?.data?.message)
            this.$toast.error(error?.response?.data?.message).goAway(3000)
        }).finally(() => {
          console.log('Requette envoyé ')
        });
      },
      
      getFinancementSource(){
      this.$dgidApi.$get('/financement_sources')
      .then(async (response) => { 
        this.haschart = true
        console.log('Données reçu financement source+++++++++++',response)
        var result = [];
          await response.data.reduce(function(res, value) {
            if (!res[value.libelle_source]) {
              res[value.libelle_source] = { libelle_source: value.libelle_source, montant: 0 };
              result.push(res[value.libelle_source])
            }
            res[value.libelle_source].montant += parseInt(value.montant);
            return res;
          }, {});
          
          
          let total = 0
          result.map((item)=>{              
              total+=parseInt(item.montant)
          })
          this.budgetAtteintSource = total
          this.modelAtteintSource = [...result,{ libelle_source: 'Total', montant: total }]

           //Chert
          let {am4core, am4charts,am4themes_animated} = this.$am4core();
            // Set theme
            am4core.useTheme(am4themes_animated);

            // Create chart instance
            var chart = am4core.create("repartitionSource", am4charts.PieChart);

            // Add data
            chart.data = result

            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "montant";
            pieSeries.dataFields.category = "libelle_source";

            // Let's cut a hole in our Pie chart the size of 40% the radius
            chart.innerRadius = am4core.percent(50);
            

            // Put a thick white border around each Slice
            pieSeries.slices.template.stroke = am4core.color("#4a2abb");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;

            //hide logo
            if(chart.logo) {
              chart.logo.disabled = true;
            }


            // Add a legend
            chart.legend = new am4charts.Legend();
            
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
         
      },
      onClearClicked () {
       this.annee = ''
       this.activite = ''
      }
    }
  }
</script>