<template>
  <div class='phoneContainer' v-if="data.skus">
    <a href="//c.m.suning.com/bcdetail.html?contentId=5221687499&itemType=bq" class="app-list">
      <div class="f34">
         <span>{{data.skus[0].title}}</span>
      </div>
      <ul class="pic-img" v-if="data.skus">
        <li v-for="(gd,index) in data.skus[0].gds" :key="index">
          <div class="zhezhao"></div>
          <!-- <img src="//image.suning.cn/uimg/MZMS/show/157682617199708574.jpg_340w_340h_1e?from=mobile" alt=""> -->
          <img :src="gd.pictureUrl" alt=""> 
          <div class='pro-price'>
            <i class="acDec borders">每满100减10</i>
            <i class="rPrice">￥{{gd.price}}</i>
          </div>
        </li>
        <!-- <li>
          <div class="zhezhao"></div>
          <img src="//image.suning.cn/uimg/MZMS/show/157682617199708574.jpg_340w_340h_1e?from=mobile" alt="">
          <div class='pro-price'>
            <i class="acDec borders">每满100减10</i>
            <i class="rPrice">￥4998</i>
          </div>
        </li>
        <li>
          <div class="zhezhao"></div>
          <img src="//image.suning.cn/uimg/MZMS/show/157682617199708574.jpg_340w_340h_1e?from=mobile" alt="">
          <div class='pro-price'>
            <i class="acDec borders">每满100减10</i>
            <i class="rPrice">￥4998</i>
          </div>
        </li> -->
      </ul>
    </a>
      
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['data']),

      // even(){
      //   let n 
      //   if(n % 2 === 0){
      //      return n  
      //   }
        
      // },
    },
    mounted() {
      this.$store.dispatch('getSelect')
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .phoneContainer
      // background-color transparent
      background-color rgba(0,0,0,0.02);
      width 100%
      margin 1px 0 0 
      font-style: normal;
      .app-list
        display block
        width 343px
        height auto 
        margin 0 0 10px 10px
        padding 0 5px
        border 1px solid transparent
        background-color #ffffff
        border-radius 4px
        position relative
        z-index 55
        overflow hidden
        font-style: normal;
        .f34
          margin-bottom 5px
          padding-top 10px
          font-size 16px
          font-style: normal;
          span 
            font-weight 700
            font-family 'Arial, Helvetica, STHeiTi, sans-serif' 
            color black
            font-style: normal; 
        .pic-img
          width 345px
          padding 10px 0 10px 2px
          overflow hidden
          li
            position relative
            float left
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            width 110px
            margin 0 5px 0 0
            .zhezhao
              width 110px
              height 110px
              background-color rgba(0,0,0,0.02);
              content ''
              position absolute
              top 0
              left 0
            img 
              width 110px
              height 110px
            .pro-price
              width 110px
              margin-top 5px
              color #a5a5a5
              text-align center
              display flex
              flex-direction column
              justify-content center
              align-items center
              .acDec
                position: relative;
                margin: 0 auto;
                border-radius: 2px;
                color: #fe053a;
                padding: 3px;
                border: 1px solid #ff2a57;
                font-style: normal;
              .borders
                border: 1px solid #ff2a57;
                background: #ffedef
                font-style: normal;
              .rPrice
                color #a5a5a5
                margin  5px 0 0 0
                width 100%
                text-align center
                font-style: normal
</style>
