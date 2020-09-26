export default {
  name: 'character-info',
  props: {
    info: Object
  },
  updated () {
    console.log(this.info)
  }
}
