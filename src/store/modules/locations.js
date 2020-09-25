import locationsApi from '@/api/locations'

const state = {
  locations: {}
}

const getters = {
  locations: state => state.locations,
  locationsInfo: state => state.locations.info || {},
  availableLocations: state => state.locations.results || []
}

const mutations = {
  setLocations: (state, data) => {
    state.locations = data
  }
}

const actions = {
  async fetchLocations ({ commit }, configs) {
    const response = await locationsApi.fetchLocations(configs)
    const { data } = response
    commit('setLocations', data)
    return response
  }
}

export default { state, getters, mutations, actions, namespaced: true }
