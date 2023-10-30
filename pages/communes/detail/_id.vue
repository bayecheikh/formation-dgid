<template>
 <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-commune></info-commune>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-commune></actions-commune>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoCommune from '@/components/communes/detail/InfoCommune';
import ActionsCommune from '@/components/communes/detail/ActionsCommune';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoCommune,
      ActionsCommune
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-communes')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'Communes', icon: 'mdi-lock',link:'/communes',position:2  }
        ],
        headerItems: [
        {
          text: 'Communes',
          disabled: false,
          to: '/communes',
          exact: true
        },
        {
          text: 'Detail commune',
          disabled: true,
          to: '/communes/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
