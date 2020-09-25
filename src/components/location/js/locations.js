import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'locations',
  created () {
    this.fetchLocations()
  },
  computed: {
    ...mapGetters('locations', ['availableLocations', 'locationsInfo'])
  },
  methods: {
    ...mapActions('locations', ['fetchLocations']),
    changeLocationsPage (pageNo) {
      const configs = {
        params: {
          page: pageNo
        }
      }
      this.fetchLocations(configs)
    },
    handleLocationClick (row) {
      this.$emit('on-location-select', row)
    }
  }
}
