export default {
    initlist(state, newlist) {
        state.listcommunes = newlist
    },
    initheader(state, newlist) {
        state.headercommunes = newlist
    },
    initdetail(state, newcommune) {
        state.detailcommune = newcommune
    },
    removeItem(state,payload) {
        state.listcommunes = state.listcommunes.filter(item => item.id != payload)
    }
}