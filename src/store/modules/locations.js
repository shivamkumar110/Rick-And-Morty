import locationsApi from '@/api/locations'

const state = {
  locations: []
}

const getters = {
  locations: state => state.locations
}

const mutations = {
  setLocations: (state, data) => {
    state.locations = data
  }
}

const actions = {
  async fetchLocations ({ commit }, configs) {
    const response = await locationsApi.fetchLocations(configs)
    const { data } = response.data
    commit('setLocations', data)
    return response
  }
}

export default { state, getters, mutations, actions, namespaced: true }
