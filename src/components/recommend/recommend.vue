<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div class="scroll">
        <div class="swiper-container">
          <slider :solder=recommends></slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
          <li @click="selectItem(item)" v-for="(item, index) in discList" class="item" :key="index">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { getRecommend, getDiscList } from 'api/recommend'
// import { playlistMixin } from 'common/js/mixin'
import { ERR_OK } from 'api/config'
// import { mapMutations } from 'vuex'

export default {
  components: {
    Slider,
    Scroll,
    Loading
  },
  // mixins: [playlistMixin],
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    loadImage() {
      if (this.checkload) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "~common/scss/variable";
.recommend {
  position: fixed;
  width: 100%;
  top: 80px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .swiper-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    .recommend-list {
      
     
      .list-title {
          text-align: center;
           height: 65px;
      line-height: 65px;
      font-size: $font-size-medium;
      color: $color-theme;
        }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-items: center;
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
          img {
            display: block;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-items: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .desc {
            color: $color-text-d;
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
}
</style>
