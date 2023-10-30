<template>

   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <form-update-commune></form-update-commune>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateCommune from '@/components/communes/modifier/FormUpdateCommune';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateCommune
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
          { text: 'communes', icon: 'mdi-lock',link:'/communes',position:2  }
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
