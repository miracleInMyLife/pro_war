<template>
<div class="headerContainer">
  <img src="../../common/images/nav-back2.png" alt="">
  <div class="inputContainer">
    <i class="iconfont icon-tubiaolunkuo-"></i>
    <input type="text" v-model="keyWord" placeholder="请输入内容搜索"/>
  </div>
  <span class="search" v-if="isShow">搜索</span>
  <span class="iconfont icon-classify_icon" v-else></span>
</div>
</template>
<script>
export default {
  props:['isShow'],
  data() {
    return {
    
      keyWord:''
    }
  },
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.headerContainer
  box-sizing border-box
  display flex
  justify-content space-between
  align-items center
  bottom-border-1px(#999)
  img
    width 48px
  .inputContainer
    background-color #eee
    border-radius 5px
    .icon-tubiaolunkuo-
      font-size 12px
      margin 9px 7.5px
    input 
      background-color #eee
      height 30px
      outline none
  .search
    padding-right 14px
  .icon-classify_icon
    font-size  22px
    margin-right 10px
</style>