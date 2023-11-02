import state from "./state";

export default {
    async getTitre({commit},payload){
       await commit('inittitre', payload)        
    },
    async getDetailprocedure({commit},payload){
        await commit('initdetailprocedure', payload)        
    }
}