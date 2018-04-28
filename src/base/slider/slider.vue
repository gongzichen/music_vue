<template>
  <div class="home_swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in solder" :key="index">
          <a :href="item.linkUrl">
               <img class="img" :src="item.picUrl" alt="">
          </a>
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  props: {
    solder: {
      type: Array,
      default: []
    }
  },
  created() {
    console.log(this.solder)
    console.log(231)
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        speed: 400,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        on: {
          slideChangeTransitionEnd: function() {}
        }
      }
    }
  }
}
</script>
<style lang="scss">
.home_swiper {
  .img {
    width: 100%;
  }
  .swiper-pagination {
    // background: red;
  }
}
</style>
