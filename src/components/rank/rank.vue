<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="(item, index) in topList" :key="index">
          <div class="icon">
            <img v-lazy="item.picUrl" width="100">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.songList" :key="index">
              <span v-html="index + 1"></span> 
              <span v-html="song.songname+'--'+song.singername"></span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-container" v-show="!topList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { getTopList } from 'api/rank'
import { ERR_OK } from 'api/config'
// import {playlistMixin} from 'common/js/mixin'
// import {mapMutations} from 'vuex'
export default {
  components: {
    Scroll, Loading
  },
  data () {
    return {
      topList: []
    }
  },
  created () {
    this._getTopList()
  },
  methods: {
    selectItem (item) {
      this.$router.push({
        path: `/rank/${item.id}`
      })
    },
    _getTopList () {
      getTopList().then((res) => {
        console.log(res)
        if (res.code === ERR_OK) {
          this.topList = res.data.topList
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";
.rank {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .toplist{
    height: 100%;
    overflow: hidden;
    .item {
      display: flex;
      margin: 0 20px;
      padding-top: 20px;
      height: 100px;
      &:last-child{
        padding-bottom: 20px;
      }
      .icon{
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        overflow: hidden;
        background: $color-highlight-background;
        color: $color-text-d;
        font-size: $font-size-small;
        .song {
          margin-bottom: 10px;
          @include no-wrap()
        }
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
