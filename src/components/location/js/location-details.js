import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'location-details',
  props: {
    details: Object
  },
  data () {
    return {
      charactersList: [],
      isCharactersLoading: false
    }
  },
  methods: {
    ...mapActions('characters', ['getCharacter']),
    getLocationCharacters () {
      const charactersUrls = this.details.residents
      const listOfPromises = []
      charactersUrls.forEach((url) => {
        const characterId = url.substr(url.lastIndexOf('/') - url.length + 1)
        listOfPromises.push(this.getCharacter(characterId))
      })
      this.isCharactersLoading = true
      axios.all(listOfPromises)
        .then((list) => {
          this.charactersList = list.map(item => item.data)
        }).catch(err => {
          this.$message(err)
        }).finally(() => {
          this.isCharactersLoading = false
        })
    },
    goToCharacter (id) {
      this.$router.push({ name: 'CharacterDetails', params: { id } })
    }
  },
  watch: {
    details: function () {
      this.getLocationCharacters()
    }
  }
}
