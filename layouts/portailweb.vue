
<template>
  <v-app id="inspire">
    <!-- <v-system-bar app color="#fff">
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->
    <v-app-bar elevation="0" app color="#b88804">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <nuxt-link class="customTopNav flex text-sm-left" to="/">
        <img src="@/static/flag.png" width="100" alt="DGID">
      </nuxt-link>
      <!-- <v-toolbar-title>PROCEDURE DGID</v-toolbar-title> -->
      <!-- <v-toolbar-title class="custom-top-title pl-12">PROCEDURE DGID</v-toolbar-title> -->
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>
    <v-main class="">
        <nuxt/>    
    </v-main>
    <v-footer height="auto" class="white pa-3">
      <span class="caption">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span class="caption mr-1">&copy; {{ new Date().getFullYear() }} dgid</span>
    </v-footer>
  </v-app>
</template>

<script>
  import AppToolbar from '@/components/AppToolbar'
  export default {
    /* middleware: 'auth', */
    middleware({redirect,$getToken,$getUser,$isLogged,$loggout }) {
      //console.log('token: ++++++++++ ',$getToken())
      if ($getToken()==null || $getUser()==null || $isLogged()==null || $isLogged()==false) {
       /*  $loggout()
        return redirect('/login') */
      }
    },
    components: {
      AppToolbar
    },
    mounted: function() {
      this.layout= this.$getUserMenu()
      this.isAuthenticate = this.$isLogged()
      this.loggedInUser = this.$getUser() 
    },
    data: () => ({
      layout:[],
      loading: false,
      isAuthenticate:false,
      loggedInUser:null,
      cards: [],
      drawer: null,
      links: [],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods: {
      async logout() {
        try {
            this.loading = true; 
            //this.$store.dispatch('toast/getMmsasage',{type:'procmsasing',text:'Deconnexion en cours ...'})
            await this.$dgidApi.$post('/logout').then(async (response) => { 
            this.$loggout()
            this.loading = false;
            //this.$store.dispatch('toast/getMmsasage',{type:'succmsas',text:'Deconnexion réussie'})   
            this.$router.push('/login');
          })
        } catch (e) {
          this.$store.dispatch('toast/getMmsasage',{type:'error',text:e})
          console.log(e)
          this.loading = false;
        }
      },
      goToProfile(){ 
        this.$router.push('/profil/'+this.loggedInUser.id);   
      },
    }
  }
</script>

<style scoped>
.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    background-color: white;
}
.highlighted{
  color: #d79b06 !important;
  background: #d79b0600;
}
.highlighted .v-list-item__icon .v-icon{
  color: #d79b06 !important;
}
.text-menu{
  font-size: 13px !important;
}
.custom-top-title {
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Roboto";
}
.lower-case{
  text-transform: capitalize; 
}
.bg-grey{
  background-color: rgb(227, 235, 243) !important;
}
.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon {
  height: 24px;
  font-size: 24px;
  width: 24px;
  color: #fff;
}
</style>