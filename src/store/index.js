
import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user: [],
    character: {},

  },
  mutations: {
    setUserState(state, payload) {
      state.user=payload
    },
    SET_CHARACTER(state, payload) {
      state.character = payload
    },

  },
  actions: {
    async registerUser({ commit }) {
     const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters/?limit=20&skip=187")
      commit('setUserState',response.data)
    },
      async getCharacterById({ commit }, id) {
      console.log('id from component', id);
        const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
        console.log(response )
      commit('SET_CHARACTER', response.data)
    } ,
    async getCharacterByName({ commit }, name) {
      console.log('id from component', name);
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?name=${name}`)
      console.log(response )
      commit('SET_CHARACTER', response.data)
    },
        async getCharacterByHair({ commit }, hair) {
      console.log('id from component', hair);
          const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?hair=${hair}`)
          console.log(response)
      commit('SET_CHARACTER', response.data)
    }
  },
  getters: {
    getUser(state) {
     return state.user
    },
    getCharacter(state) {
      return state.character
    }

  },
})