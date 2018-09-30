export const state = () => ({
  list: [],
})

export const getters = {
  showList(state) {
    return state.list
  },
}

export const mutations = {
  setList(state, list) {
    state.list = list;
  },
  findUser(state,id){
    return state.list.find(list => list.id === id)
  }
}

export const actions = {
  async getList({commit}) {
    const res = await this.$axios.$get('/users')
    commit("setList", res)
  },
}
