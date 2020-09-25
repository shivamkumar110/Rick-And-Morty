import api from '@/utils/callApi'

import paths from '@/paths'

export default {
  fetchLocations (configs) {
    return api.getRequest(paths.api.locations, configs)
  }
}
