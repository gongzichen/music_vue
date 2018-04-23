<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a href="item.linkUrl">
                <img src="item.pucUrl" class="needslick" @load="loadImage">
              </a>
            </div>
          </slider>
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
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scsoll/scroll'
  import {getRecommend, getDiscList} from 'api/recommend'
  import{ playlistMixin } from 'common/js/mixin'
</script>