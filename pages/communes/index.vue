<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container">
    <v-card class="container" flat>  
      <list-commune></list-commune>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListCommune from '@/components/communes/ListCommune'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-communes')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListCommune
    },
    mounted: function() {
      this.$store.dispatch('communes/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'Communes', icon: 'mdi-lock',link:'/communes',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des communes',
            disabled: true,
            to: '/communes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
