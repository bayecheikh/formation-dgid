
<template>
    <div>
        <v-btn color="primary" class="mr-3" text outlined @click.stop="dialog = true">
            SE CONNECTER
        </v-btn>
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title class="text-h5">
                    Se connecter
                </v-card-title>

                <v-card-text>
                    <v-text-field dense label="Login" placeholder="Login" outlined></v-text-field>
                    <v-text-field dense label="Mot de pase" placeholder="Mot de passe" outlined></v-text-field>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                        Fermer
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">
                        Se connecter
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
        dialog: false,
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