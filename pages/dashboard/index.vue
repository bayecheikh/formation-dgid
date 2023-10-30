<template>
  <div class="custom-container mt-5 "> 
    <v-tabs v-model="tab">
          <!-- <v-tab class="text-normal"> Statistiques </v-tab> -->
          <v-tab class="text-normal custom-font-stats-size"> <span class="custom-font-stats-size">Statistiques des transactions</span></v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab"> 
      <!-- <v-tab-item class="custom-container mt-0">  
        <cumul-composante></cumul-composante>                     
      </v-tab-item> -->  
      <v-tab-item class="custom-container mt-0">  
        <statistiques></statistiques>                     
      </v-tab-item>          
    </v-tabs-items>
     
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';

import CumulComposante from '@/components/dashboard/CumulComposante';
import Statistiques from '@/components/dashboard/Statistiques';

import { mapMutations, mapGetters } from 'vuex'

  export default {
    layout: "dashboard",
    components: {

      LeftMenu,
      CumulComposante,
      Statistiques,
    },
    mounted: function() {
    },
    computed: mapGetters({
      
    }),
    data () {
      return {
        tab: null,

      }
    },
    methods:{
      
    }
  }
</script>

<style>

.custom-font-stats-size{
  font-size: 14px;
}
</style>