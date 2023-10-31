<template>
    <v-app id="inspire">
        <v-app-bar app elevation="0">
                <div class="width-100">
                    <v-card
                    class="d-flex justify-space-between"
                    flat
                    >
                        <v-card
                            class="pa-4"
                            tile
                            color=""
                            flat
                        >
                            <nuxt-link class="customTopNav flex text-sm-left" to="/procedures">
                                <img src="@/static/flag.png" width="100" alt="DGID">
                            </nuxt-link>
                        </v-card>
                        <v-card
                            class="d-flex justify-space-between pa-4"
                            flat
                        >
                            <v-btn
                                text
                                >
                                PROCEDURES
                            </v-btn>
                            <v-btn
                                text
                                >
                                RECHERCHEZ UN DOCUMENT
                            </v-btn>
                        </v-card>
                        <v-card
                            class="d-flex justify-space-between pa-4"
                            flat
                        >
                            <v-btn
                                text
                                >
                                SE CONNECTER
                            </v-btn>
                            <v-btn
                                text
                                >
                                S'INSCRIRE
                            </v-btn>
                        </v-card>
                        <v-card
                            class="d-flex justify-space-between pa-4"
                            flat
                        >
                            <v-btn
                                text
                                >
                                Langue
                            </v-btn>
                        </v-card>
                        
                    </v-card>
                </div>
        </v-app-bar>

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
    export default {
        data: () => ({ drawer: null }),
    }
</script>
<style scoped>
.width-100{
    width: 100%;
}
</style>