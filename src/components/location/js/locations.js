import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'locations',
  created () {
    this.getLocations()
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('locations', ['availableLocations', 'locationsInfo'])
  },
  methods: {
    ...mapActions('locations', ['fetchLocations']),
    async getLocations (configs) {
      try {
        this.loading = true
        await this.fetchLocations(configs)
      } catch (error) {
        this.$message(error)
      } finally {
        this.loading = false
      }
    },
    changeLocationsPage (pageNo) {
      const configs = {
        params: {
          page: pageNo
        }
      }
      this.getLocations(configs)
    },
    handleLocationClick (row) {
      this.$emit('on-location-select', row)
    }
  }
}
