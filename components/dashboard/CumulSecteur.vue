<template>
  <v-card class="mx-auto mb-5 pl-10 pt-0 pr-10 pb-5 my-10 border-grey">
    <div class="custom-container mt-5">
      <v-row justify="center" class="d-flex justify-content-between">
        <v-col
          lg="3"
          md="3"
          sm="12"
        >
        <v-autocomplete
                v-model="annee"
                :items="listannees"
                outlined
                dense
                label="Année"
                item-text="libelle"
                item-value="libelle"
                @change="changeannee"
              >
          </v-autocomplete>
        </v-col>
        <v-col lg="3" md="3" sm="12">
            <v-autocomplete
              v-model="trimestre"
              :items="listmonnaies"
              outlined
              dense
              label="Trimestre"
              item-text="libelle"
              item-value="libelle"
              @change="changetrimestre"
              >
            </v-autocomplete>
        </v-col>
        <v-col
              lg="3"
              md="3"
              sm="12"
            >
            <v-autocomplete
                    v-model="secteur"
                    :items="listsecteurs"
                    outlined
                    dense
                    label="Secteur"
                    item-text="libelle"
                    item-value="libelle"
                    @change="changesecteur"
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
        <v-col md="12" sm="12" lg="12" class="text-sm-center bg-grey-2 my-5">
          <h2 class="text-grey">Cumul par secteur</h2>
        </v-col>
        <v-col md="12" sm="12" lg="12" class="pl-8">
          <v-row class="d-flex justify-content-between">
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.1.2 : Nombre d’emplois directs créés ou consolidés dans les chaînes de valeur agricoles et artisanales dont 50% pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_1_2?model.Ind_1_2.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.R.1.2.1. : Nombre d’entreprises financées dont 50% pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_1_2_1?model.Ind_R_1_2_1.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.R.1.1.2 : Nombre MPME formalisées</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_1_1_2?model.Ind_R_1_1_2.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.R.1.1.1 : Nombre de personnes formées en appui métier et en gestion d’entreprise dont pour 40% pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_1_1_1?model.Ind_R_1_1_1.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.2.2 : Nombre d’emplois décents directs créés et/ou consolidés dans les autres secteurs prioritaires dont pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_2_2?model.Ind_2_2.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind.R.1.2.2 : Volume de financement octroyé (en millions de FCFA) dont 40% destinés aux femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_1_2_2?model.Ind_R_1_2_2.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind. R.2.2.2 : Volume de financement octroyé (en millions de FCFA) dont 40% destinés aux femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_2_2_2?model.Ind_R_2_2_2.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind. R.2.2.1 : Nombre de MPME financées dont 50% pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_2_2_1?model.Ind_R_2_2_1.toLocaleString():0}}</h2>
              </div>
            </v-col>
            <v-col md="4" sm="12" lg="4" class="">
              <div class="bg-marron-2 mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
                <h4 class="">Ind. R.2.1.1 : Nombre de MPME bénéficiant d’un accompagnement technique dont 50% pour les femmes</h4>
                <h2 class="text-primary mt-2">{{model.Ind_R_2_1_1?model.Ind_R_2_1_1.toLocaleString():0}}</h2>
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
    import Notification from '@/components/Notification'
    export default {
      components: {
        Notification
      },
      mounted: function() {
        this.getResultatAtteint()
        this.$store.dispatch('annees/getList')
        this.$store.dispatch('monnaies/getList')
        this.$store.dispatch('sous_secteurs/getList')
        
        /* this.$store.dispatch('structures/getList')
        this.$store.dispatch('fournisseurs/getList') */
      },
      computed: {
        ...mapGetters({
        listannees: 'annees/listannees',
        listmonnaies: 'monnaies/listmonnaies',
        listsecteurs: 'sous_secteurs/listsous_secteurs',
        /* listfournisseurs: 'fournisseurs/selectlistfournisseurs',
        liststructures: 'structures/selectliststructures', */
        
      })},
      data: () => ({
        annee:'',
        trimestre:'',
        secteur:'',
        listresultatAtteints : [],
        tab: null,
        loading: false,
        message:null,
        color:null,
        valid: true,
        showFournisseur: false,
        message:null,
                
        model: {      
          Ind_1 : '0',
          Ind_2 : '1000',
          Ind_1_1 : '10',
          Ind_2_1 :'50',
          Ind_R_3_1_1 :'OUI',
          Ind_R_3_1_2 : 'NON',
          Ind_R_3_2_1 : '10',
          Ind_R_3_2_2 :'150',
  
          Ind_1_2 :'0',
          Ind_R_1_2_1 :'120',
          Ind_R_1_1_2 :'150',
          Ind_R_1_1_1 :'50',
          Ind_2_2 :'160',
          Ind_R_1_2_2 : '90',
          Ind_R_2_2_2 : '70',
          Ind_R_2_2_1 :'60', 	
          Ind_R_1_1_1 :'180', 
          Ind_R_2_1_1 :'13', 
        },
        resume:{
          annee:'0',
          trimestre:'0'
        },
        rules:{
          numberRules: [
          v  => {
            if (!v.trim() || v=='0') return true;
            if (!isNaN(parseFloat(v)) && v >= 0 ) return true;
            return 'Veuillez saisir un chiffre valide';
          }],
          firstnameRules: [
            v => !!v || 'Prénom est obligatoire',
            v => (v && v.length <= 50) || 'Prénom doit etre inférieur à 20 caratères',
          ],
          lastnameRules: [
            v => !!v || 'Nom est obligatoire',
            v => (v && v.length <= 50) || 'Nom doit etre inférieur à 10 caratères',
          ],
          emailRules: [
            v => !!v || 'E-mail est obligatoire',
            v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
          ],
          donnee_basenameRules: [
            v => !!v || 'Login est obligatoire',
            v => (v && v.length <= 10) || 'Nom doit etre inférieur à 10 caratères',
          ],
          rolesRules: [
            v => (v && !!v.length) || 'Role est obligatoire',
          ],
          telephoneRules: [
            v => !!v || 'Téléphone est obligatoire',
          ],
          country_codeRules: [
            v => !!v || 'L\'indicatif du pays est obligatoire',
          ],
          fournisseur_services_idRules: [
            v => (!!v) || 'champ obligatoire',
          ],
          structure_idRules: [
            v => (!!v) || 'Structure est obligatoire',
          ],
          adresseRules: [
            v => !!v || 'Adresse est obligatoire',
            v => (v && v.length <= 100) || 'Adresse doit etre inférieur à 50 caratères',
          ],
          nationalityRules: [
            v => !!v || 'Nationalité est obligatoire',
            v => (v && v.length <= 50) || 'Nationalité doit etre inférieur à 15 caratères',
          ],
          date_of_birthRules: [
            v => !!v || 'Date de naissance est obligatoire',
          ],
          place_of_birthRules: [
            v => !!v || 'Lieu de naissance est obligatoire',
            v => (v && v.length <= 50) || 'Lieu de naissance doit etre inférieur à 20 caratères',
          ],
          /* sexeRules: [
            v => !!v || 'Civilité est obligatoire',
          ], */
          type_identificationRules: [
            v => !!v || 'Type d\'identification est obligatoire',
          ],
          numero_identificationRules: [
            v => !!v || 'Numéro d\'identification est obligatoire'
          ],
          fonctionRules: [
            v => !!v || 'Fonction est obligatoire'
          ]
        },
  
        imageData:null,
      }),
      methods: {
        getResultatAtteint(){
          this.$dgidApi.$get('/allSectoriel')
          .then(async (response) => { 
            console.log('Données reçu resulat atteint sectoriel -------- +++++++++++',response)
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
                this.model = {      
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
        async changeannee(value) {
         this.updateAtteint(value,'annee')
        },
        async changesecteur(value) {
          this.updateAtteint(value,'secteur')     
        },
        async changetrimestre(value) {
          this.updateAtteint(value,'trimestre')     
        },

        onClearClicked () {
        this.annee = ''
        this.trimestre = ''
        this.secteur = ''
        this.getResultatAtteint()
        
        },
        async updateAtteint(value,type) {
          var list = []
          if(type=='annee'){
            this.annee = value
            if(this.trimestre=='' && this.secteur=='')
            list = this.listresultatAtteints.filter((item) =>(item.annee==value))
            if(this.trimestre!='' && this.secteur=='')
            list = this.listresultatAtteints.filter((item) =>(item.annee==value && (parseInt(item.trimestre.slice(-1))<=parseInt(this.trimestre.slice(-1)))))
            if(this.trimestre=='' && this.secteur!='')
            list = this.listresultatAtteints.filter((item) =>(item.annee==value && item.secteur==this.secteur))
            if(this.trimestre!='' && this.secteur!='')
            list = this.listresultatAtteints.filter((item) =>(item.annee==value && item.secteur==this.secteur && (parseInt(item.trimestre.slice(-1))<=parseInt(this.trimestre.slice(-1)))))
          }
           
          if(type=='trimestre'){
            
            this.trimestre = value
            console.log("+++Item filtre trimestre : ",(this.listresultatAtteints[0].trimestre.slice(-1)))
            list = this.listresultatAtteints.filter((item) =>(parseInt(item.trimestre.slice(-1))<=parseInt(value.slice(-1))))
            if(this.annee!='' && this.secteur=='')
            list = this.listresultatAtteints.filter((item) =>((parseInt(item.trimestre.slice(-1))<=parseInt(value.slice(-1))) && item.annee==this.annee))
            if(this.annee=='' && this.secteur!='')
            list = this.listresultatAtteints.filter((item) =>((parseInt(item.trimestre.slice(-1))<=parseInt(value.slice(-1))) && item.secteur==this.secteur))
            if(this.annee!='' && this.secteur!='')
            list = this.listresultatAtteints.filter((item) =>((parseInt(item.trimestre.slice(-1))<=parseInt(value.slice(-1))) && item.annee==this.annee && item.secteur==this.secteur))
          }
          
          if(type=='secteur'){
            this.secteur = value
            list = this.listresultatAtteints.filter((item) =>(item.secteur==value))
            if(this.annee!='' && this.trimestre=='')
            list = this.listresultatAtteints.filter((item) =>(item.secteur==value && item.annee==this.annee))
            if(this.annee=='' && this.trimestre!='')
            list = this.listresultatAtteints.filter((item) =>(item.secteur==value && (parseInt(item.trimestre.slice(-1))<=parseInt(this.trimestre.slice(-1)))))
            if(this.annee!='' && this.trimestre!='')
            list = this.listresultatAtteints.filter((item) =>(item.secteur==value && item.annee==this.annee && (parseInt(item.trimestre.slice(-1))<=parseInt(this.trimestre.slice(-1)))))
          }
          

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

          list.map((item)=>{

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
          this.model = {      
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
      },
      metaInfo () {
        return {
          items: this.items,
        }
      }
    }
  </script>
  <style>
  .custom-card-grey .border-grey{
    background: #f1f3f5d9 !important;
  }
  .v-text-field fieldset{
    background-color: #fff !important;
  }
  </style>
  