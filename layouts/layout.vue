<template>
    <v-app id="inspire">
        <header-one></header-one>
        <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        >
        <!--  -->
        </v-navigation-drawer>

        <v-main class="grey lighten-2">
            <nuxt/>     
        </v-main>
    </v-app>
</template>
  
<script>
import HeaderOne from '@/components/sections/HeaderOne';
    export default {
        components: {
         HeaderOne
        },
        data: () => ({ 
            drawer: null,
        }),
        methods :{
        }
    }
</script>
<style scoped>

</style>