<template>
    <div class="d-flex justify-center">
        <div class="width-800 my-6">
            <v-row>
                <v-col md="6" lg="6" sm="12" v-for="item in procedures" :key="item.id">
                    <v-card class="mx-auto pa-4" outlined @click="goToDetail(item)">
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="50" color="">
                                <img src="@/static/avatar/file.png" alt="">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <h2>
                                    {{ item.nom_procedure }}
                                </h2>
                                <p>{{item.description}}</p>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="my-4">
                <v-btn depressed primary color="primary">
                    AFFICHER TOUTES LES PROCEDURES ...
                </v-btn>
            </v-row>
        </div>
    </div>
</template>
  
<script>
export default {
    layout: 'layout',
    components: {
    },
    data: () => ({
        procedures: [
          {
            id:1,
            nom_procedure: 'Quitus fiscal',
            description: 'Demande de quitus fiscal',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          },{
            id:2,
            nom_procedure: 'Attestation de nom imposition',
            description: 'Attestation de nom imposition',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          },{
            id:3,
            nom_procedure: 'Certificat',
            description: 'Demande de quitus fiscal',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          },{
            id:4,
            nom_procedure: 'Déclaration d\'existance',
            description: 'Déclaration d\'existance',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          }
        ],
    }),
    methods: {
        goToDetail(item){
            console.log(item)
            this.$store.dispatch('accueil/getTitre',item.nom_procedure)
            this.$store.dispatch('accueil/getDetailprocedure',item)
            this.$router.push('accueil/detailprocedure')
        }
    }
};
</script>
<style scoped>
.height-38 {
    height: 38px !important;
}

.custom-h2 {
    padding: 18px;
    background-color: #995104;
    color: #fff;
    opacity: 0.8;
}

.width-800 {
    max-width: 800px !important;
}
</style>