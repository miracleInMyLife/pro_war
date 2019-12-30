<template>
  <div>
      <div class="sn-list-box">
        <div class="sn-list-nav">
          <ul>
            <li class="cur kindsAds" @click="toHousehold">
              <div class="before"></div>
              热门推荐
              <div class="after"></div>
            </li>
           <li class=" kindsAds">
              <div class="before"></div>
              热门推荐 
            </li>
            <li class="kindsAds">
              <div class="before"></div>
              热门推荐  
            </li>
            <li class="kindsAds">
              <div class="before"></div>
              热门推荐           
            </li>
          </ul>
        </div>
        <div class="sn-list-con">
          <div class="con-box">
            <div class="newRecommendList"></div>
            <hgroup class="module-title class-title">
              <div class="line"></div>
              <em>热门推荐</em>
            </hgroup>
            <div class="household-recommend">
              <ul>
                <li>
                  <a class="neibuLi" href="//m.suning.com/search/空调/">
                    <img src="//image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg" alt="">
                    <div class="backgroundImg"></div>
                    <em>空调</em>
                  </a>
                </li>
                 <li>
                  <a class="neibuLi" href="//m.suning.com/search/空调/">
                    <img src="//image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg" alt="">
                    <div class="backgroundImg"></div>
                    <em>空调</em>
                  </a>
                </li>
                 <li>
                  <a class="neibuLi" href="//m.suning.com/search/空调/">
                    <img src="//image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg" alt="">
                    <div class="backgroundImg"></div>
                    <em>空调</em>
                  </a>
                </li>
                 <li>
                  <a class="neibuLi" href="//m.suning.com/search/空调/">
                    <img src="//image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg" alt="">
                    <div class="backgroundImg"></div>
                    <em>空调</em>
                  </a>
                </li>
                 <li>
                  <a class="neibuLi" href="//m.suning.com/search/空调/">
                    <img src="//image4.suning.cn/uimg/asbs/ad/1526974072412_app_wap_list.jpg" alt="">
                    <div class="backgroundImg"></div>
                    <em>空调</em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      toHousehold(){
        
      }
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .sn-list-box
      width 100vw
      background-color #ffffff
      margin-top 44px
      .sn-list-nav
        position fixed
        left 0
        top 44px
        height calc(100vh - 44px)
        width 87px
        overflow-y auto 
        z-index 50
        background-color: #f4f4f4;
        ul
          width 87px
          li 
            position relative
            float left 
            width 86px
            height 46px
            line-height 46px
            text-align center
            border-right: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            box-sizing: border-box;
            color: #666;
            &.cur 
              border-right-color: transparent;
              background: #FFF;
              font-size: 14px;
            .before
              position absolute
              left 0 
              bottom -1px
              width 86px
              height 1px
              background: #E9E9E9;
            .after
              position absolute
              left 0
              top 0
              height 100%
              width 4px
      .sn-list-con
        box-sizing border-box
        margin 0 0 0 86px
        padding 10px
        overflow auto 
        .con-box
          width 270px
          .newRecommendList
            width 270px
          .module-title
            position relative
            width 100%
            text-align left
            margin 30px auto 20px auto
            .line
              width 100%
              position absolute
              top 10px
              left 0
              height 1px
              background-color #f2f2f2
            em 
              background-color #ffffff
              padding 0 5px 0 0
              display inline-block
              position relative
              height 12px
              line-height 12px
              font-size 12px
              vertical-align center
              font-style: normal;
              font-family: Arial,Helvetica,STHeiTi,sans-serif;
          .household-recommend
            width 270px
            overflow hidden
            ul 
              width 270px
              overflow hidden
              margin-top -15px
              li
                float left 
                width 90px
                margin-top 15px
                a 
                  display block
                  color #353d44
                  text-decoration none 
                  width 90px
                  height 85px
                  img 
                    width 60px
                    height 60px
                    position relative
                    vertical-align middle
                    margin 0 15px 5px 15px
                  .backgroundImg
                    width: 60px;
                    height:60px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: url(imgs/patternless.png) no-repeat;
                    background-size: cover;
                    z-index: 3
                  em 
                    display: block;
                    white-space: nowrap;
                    font-size: 12px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: #666;
                    font-weight: normal;
                    font-style: normal;




 
</style>
