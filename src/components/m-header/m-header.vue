<template>
  <div class='m-header'>
      <div class='icon'></div>
      <h1 class="text">gggg Music</h1>
      <!-- 个人中心/登入 -->
      <router-link tag='div' class='mine' to='/user'>
        <i class='icon-mine'></i>
      </router-link>
  </div>
</template>

<script type='text-ecmascript-6'>
    export default {}
</script>

<style scope lang='scss'>
    @import '~common/scss/variable';
    @import '~common/scss/mixin';
    .m-header {
        position: relative;
        height: 44px;
        text-align: center;
        color: $color-theme;
        font-size: 0;
        .icon {
            display: inline-block;
            vertical-align: top;
            margin-top: 6px;
            width: 30px;
            height: 32px;
            margin-right: 9px;
            @include bg-image('logo');
            border-radius: 50%;
            background-size: 30px 32px !important;
        }
        .text {
            display: inline-block;
            vertical-align: top

        }
    }
</style>

