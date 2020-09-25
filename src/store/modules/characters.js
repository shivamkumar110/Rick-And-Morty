import charactersApi from '@/api/characters'

const state = {
  character: {}
}

const getters = {
  character: state => state.character
}

const mutations = {
  setCharacter: (state, data) => {
    state.character = data
  }
}

const actions = {
  async getCharacter ({ commit }, id) {
    const response = await charactersApi.fetchCharacter(id)
    const { data } = response
    commit('setCharacter', data)
    return response
  }
}

export default { state, getters, mutations, actions, namespaced: true }
