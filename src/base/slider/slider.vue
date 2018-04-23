<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index}"
      v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script>
import {addClass} from 'common/js/dom'
import Bscroll from "bttter-scroll"
export default {
  name: 'slider',
  props: {
    loops: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDotos()
      this._initSlider()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)
  },
  // keep-alive 组件激活时候调用
  activated () {
    if (this.autoPlay) {
      console.log('组件被激活')
      this._play()
    }
  },
  // keep-alive 组件停止调用时
  deactivated () {
    clearTimout(this.timer)
  },
  // 实例销毁前调用
  beforeDestroy () {
    clearTimout(this.timer)
  },
  methods: {
    // 设置宽度
    _setSliderWidth (isResize) {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth = 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    }
  },
  // 初始化
  _initSlider () {
    this.slider = new Bscroll(this.$refs.slider, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: true,
      snapLoop: this.loop,
      snapThreshold: 0.3,
      snapSpeed: 400
    })
    this.slider.on('scrollEnd', () => {
      let pageIndex = this.slider.getCurrentPage().pageX,
      if (this.loop)  {
        pageIndex -= 1
      }
      this.currentPageIndex = pageIndex

      if (this.autoPlay) {
        this._play()
      }
    })
  },
  // 设置指示器
  _initDotos () {
    this.dots = new Array(this.children.length)
  },
  // 移动设置
  _play () {
    let pageIndex = this.currentPageIndex + 1
    if (this.loop) {
      pageIndex += 1
    }
    this.timer = setTimeout(() => {
      // 移动的页数
      this.slider.goToPage(pageIndex, 0, 400)
    }, this.interval)
  } 
}
</script>
