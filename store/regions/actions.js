export default {
    getList({commit}){
        this.$dgidApi.$get('regions')
        .then(async (response) => { 
        console.log('Données reçu+++++++++++',response)
            await commit('initlist', response.data)
            await commit('initSelectList', response.data)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requette envoyé ')
        });
    },

    async getDetail({commit},payload){
        console.log('Données detail reçu +++++++++++',payload)
        await commit('initdetail', payload)
    },
    async deleteregion({commit,dispatch},payload){
        await commit('removeItem',payload)    
    }
}