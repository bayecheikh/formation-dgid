<template>
    <v-app-bar app elevation="0" class="ml-0 mr-0">
        <div class="width-100">
            <v-card class="d-flex justify-space-between" flat>
                <v-card class="pa-4" tile color="" flat>
                    <nuxt-link class="customTopNav flex text-sm-left" to="/accueil">
                        <img src="@/static/flag.png" width="100" alt="DGID">
                    </nuxt-link>
                </v-card>
                <v-card class="d-flex justify-space-between pa-4" flat>
                    <v-btn text @click="goToDemande">
                        PROCEDURES
                    </v-btn>
                    <v-btn text @click="goToResultat">
                        RECHERCHEZ UN DOCUMENT
                    </v-btn>
                </v-card>
                <v-card class="d-flex pa-4" flat>
                    <template>
                        <login></login>
                        <register></register>        
                    </template>
                </v-card>
                <v-card class="d-flex justify-space-between pa-4" flat>
                    <template>
                        <div class="text-center">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text v-bind="attrs" v-on="on">
                                        Langue
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(item, index) in langues" :key="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </template>
                </v-card>
            </v-card>
        </div>
    </v-app-bar>
</template>
<script>
import Login from '@/components/sections/auth/Login';
import Register from '@/components/sections/auth/Register';
export default {
    components: {
        Login,
        Register
    },
    data: () => ({
        drawer: null,
        dialog: false,
        dialog2: false,
        langues: [
            { title: 'FR' },
            { title: 'EN' },
            { title: 'AR' }
        ],
    }),
    methods: {
        goToDemande() {
            this.$router.push('/demandes');
        },
        goToResultat() {
            this.$router.push('/resultats');
        }
    }
}
</script>
<style scoped>
.width-100 {
    width: 100%;
}

.v-sheet.v-card {
    border-radius: 0px;
}
</style>