import Locations from '@/components/location/Locations'
import LocationDetails from '@/components/location/LocationDetails'

export default {
  name: 'home',
  components: {
    Locations,
    LocationDetails
  },
  data () {
    return {
      selectedLocationDetails: null
    }
  },
  methods: {
    handleLocationSelect (details) {
      this.selectedLocationDetails = details
    }
  }
}
