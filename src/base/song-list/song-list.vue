<template>
  <div class="song-list">
      <ul>
          <li @click="selectItem(song, index)" class="item"
					v-for="(song, index) in songs" :key="index">
						<div class="rank" v-show="rank">
							<span :class="getRankCls(index)" v-text="getRankText(index)"></span>
						</div>
						<div class="content">
							<h2 class="name">{{song.name}}</h2>
							<p class="desc">{{getDesc(song)}}</p>
						</div>
					</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {}
  },
  methods: {
    selectItem(item, index) {
      this.$emit('selectItem', item, index)
    },
    getDesc(song) {
      return `${song.singer}·${song.album}`
    },
    getRankCls(index) {
      if (index <= 2) {
        return `icon icon${index}`
      } else {
        return 'text'
      }
    },
    getRankText(index) {
      if (index > 2) {
        return index + 1
      }
    }
  }
}
</script>

<style scope lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";

.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: center;
    height: 64px;
    font-size: $font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 30px;
      text-align: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
        &.icon0 {
          bg-image: ("first");
        }
        &.icon1 {
          // bg-image('second')
        }
        &.icon2 {
          // bg-image('third')
        }
      }
      .text {
        color: &color-theme;
        font-size: &font-size-large;
      }
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        color: $color-text;
      }
      .desc {
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>


