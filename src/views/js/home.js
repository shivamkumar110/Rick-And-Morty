import { mapActions } from 'vuex'
import Locations from '@/components/location/Locations'

export default {
  name: 'home',
  components: {
    Locations
  },
  created () {
    this.fetchLocations()
  },
  methods: {
    ...mapActions('locations', ['fetchLocations'])
  }
}
