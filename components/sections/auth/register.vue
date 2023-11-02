<template>
    <div>
        <v-btn color="primary" class="mr-3" text outlined @click.stop="dialog2 = true">
        CREER UN COMPTE
        </v-btn>
        <v-dialog v-model="dialog2" max-width="400">
            <v-card>
                <v-card-title class="text-h5">
                    Créer un compte
                </v-card-title>

                <v-card-text>
                    <v-text-field dense label="Prénom" placeholder="Prénom" outlined></v-text-field>
                    <v-text-field dense label="Nom" placeholder="Nom" outlined></v-text-field>
                    <v-text-field dense label="Email" placeholder="Email" outlined></v-text-field>
                    <v-text-field dense label="Mot de pase" placeholder="Mot de passe" outlined></v-text-field>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog2 = false">
                        Fermer
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog2 = false">
                        Créer un compte
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div> 
</template>
<script>
export default {
    components: {
        
    },
    data: () => ({
        dialog2: false
    }),
    methods: {
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