import { mapActions } from 'vuex'
import CharacterInfo from '@/components/character/CharacterInfo'
export default {
  name: 'character-details',
  components: {
    CharacterInfo
  },
  data () {
    return {
      characterInfo: null
    }
  },
  created () {
    this.getCharacterInfo()
  },
  methods: {
    ...mapActions('characters', ['getCharacter']),
    async getCharacterInfo () {
      const id = this.$route.params.id
      try {
        const { data } = await this.getCharacter(id)
        this.characterInfo = data
      } catch (error) {
        this.$message(error)
      }
    }
  }
}
