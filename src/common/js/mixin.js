import { mapGetters, mapMutations, mapActions } from 'vuex'
import { playMode } from 'common/js/config'

export const playlistMixin = {
  computed: {
    ...mapGetters(['playlist'])
  },
  mounted () {
    this.handlePlaylist(this.playlist)
  },
  // 激活组件
  activated () {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist (newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      console.log('component must implement handlePlaylist method')
    }
  }
}