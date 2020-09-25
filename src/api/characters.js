import api from '@/utils/callApi'

import paths from '@/paths'

export default {
  fetchCharacter (id) {
    return api.getRequest(paths.api.character(id))
  }
}
