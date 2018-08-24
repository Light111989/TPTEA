const state = {
  hideDetails: false,
}
const getters = {
  getIsHideDetail: state => {
    return state.hideDetails
  },
}
const mutations = {
  setIsHideHeader(state, value) {
    state.hideDetails = value
  },
}
const actions = {
  hideDetail({commit}, value) {
    commit('setIsHideHeader', value)
    console.log(value)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
