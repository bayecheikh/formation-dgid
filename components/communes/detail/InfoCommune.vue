<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <img src="@/static/avatar/user.png" class="user-profil" alt="Espace Senegal Service">
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
                  <h3 class="mb-4">{{detailcommune.nom_commune}}</h3>
                  <p class="info-profil mb-4"><span>Slug :
                      </span>{{detailcommune.slug}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>Latitude :
                      </span>{{detailcommune.latitude}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>Longitude :
                      </span>{{detailcommune.longitude}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>SVG :
                      </span>{{detailcommune.svg}}
                  </p>
              </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      detailcommune: 'communes/detailcommune'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/communes');
      },
    },
  }
</script>
<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>