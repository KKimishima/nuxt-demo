// import Vuex from 'vuex'
//
// const store = () => new Vuex.Store({
//
//   state: {
//     counter: 0
//   },
//   mutations: {
//     increment (state) {
//       state.counter++
//     }
//   }
// })
//
// export default store
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
