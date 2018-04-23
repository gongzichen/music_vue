<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 缓存组件 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <player></player> -->
  </div>
</template>
<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  // import Player from 'components/player/player'
  import Tab from 'components/tab/tab'
  
  export default{
    components: {
      MHeader,
      Tab
      // Player
    }
  }
</script>

<style scoped lang="scss">
</style>