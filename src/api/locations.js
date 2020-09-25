import api from '@/utils/callApi'

import paths from '@/paths'

export default {
  fetchLocations (code) {
    return api.getRequest(paths.api.locations)
  }
}
