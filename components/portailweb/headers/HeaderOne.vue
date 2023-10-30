<template>
<div>
  header
</div>

</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      listactivites: 'activites/listactivites',
      headers: 'activites/headeractivites'
    }),
    props: ['tab'],
    metaInfo () {
      return {
        tab: this.tab,
      }
    },
    methods: {
      visualiserItem (item) {   
        this.$store.dispatch('activites/getDetail',item)
        this.$router.push('/activites/detail/'+item.id);
      },
      editItem (item) {   
        this.$store.dispatch('activites/getDetail',item)
        this.$router.push('/activites/modifier/'+item.id);
      },
       deleteItem (item) {
        this.dialog=false   
        this.$store.dispatch('toast/getMessage',{type:'processing',text:'Traitement en cours ...'}) 
        this.$dgidApi.$delete('/activites/'+this.activeItem.id)
        .then(async (response) => { 
            this.$store.dispatch('activites/deleteactivite',this.activeItem.id)
            this.$store.dispatch('toast/getMessage',{type:'success',text:response.data.message || 'Suppression réussie'})
            }).catch((error) => {
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Échec de la suppression'})
              console.log('Code error ++++++: ', error)
            }).finally(() => {
              
            console.log('Requette envoyé ')
        });
        /* alert('Supprimer '+item.id) */
      },
      exporterItem (item) {
        alert('Exporter '+item.id)
      },
      visualiser(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let activite = this.selected.map(function(value){ return value})[0]
          this.$store.commit('activites/initdetail',activite)
          this.$router.push('/activites/detail/'+activite.id);
        }
      },
      modifier(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let activite = this.selected.map(function(value){ return value})[0]
          this.$store.commit('activites/initdetail',activite)
          this.$router.push('/activites/modifier/'+activite.id);
        }
      },
      supprimer(){
        if(this.selected.length>=1)
        alert('Supprimer '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez selectionner un element')
      },
      exporter(){
        if(this.selected.length>=1)
        alert('Exporter '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez selectionner un element')
      },
      opendialog (item) {
        this.dialog=true
        this.activeItem=item
      },
    },
    data: () => ({
     dialog: false,
      progress:true,
      selected: [],
      search:'',
      items:[],
      page: 1,
      totalPages:1,
      pageCount: '',
      itemsPerPage:'',
      path:'',
      totalItems:0,
      options: {},
      selectedItem:0,
      activeItem:{}
    })
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>