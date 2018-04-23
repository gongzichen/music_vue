import * as types from './mutation-types'

const mutation = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  }

}

export default mutation