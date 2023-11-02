<template>
    <div class="d-flex justify-center">
        <div class="width-800 my-6">
            <v-row>
                <v-col md="12" lg="12" sm="12">
                    <v-card class="mx-auto pa-4" outlined >
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="50" color="">
                                <img src="@/static/avatar/file.png" alt="">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <h2>
                                    {{ detailProcedure && detailProcedure.nom_procedure }}
                                </h2>
                                <p>{{ detailProcedure &&  detailProcedure.body}}</p>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    layout: 'layout',
    computed: mapGetters({
      detailProcedure: 'accueil/detailprocedure'
    }),
    components: {
    },
    data: () => ({
    
    }),
    methods: {
        goToDetail(titre){
            this.$store.dispatch('accueil/getTitre',titre)
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