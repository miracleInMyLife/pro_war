<template>
  <div id="wrap" ref="wrap">
    <div class="header">
      <div class="header-top">
        <img @click="$router.push('/category')" class="img1" src="https://image2.suning.cn/uimg/cms/img/157199320847433454.png" alt="category">
        <img class="img2" src="https://image1.suning.cn/uimg/cms/img/157734413513115783.gif" alt="header2">
        <img @click="$router.push('/personal')" class="img1" src="https://image1.suning.cn/uimg/cms/img/157199321817918653.png" alt="personal">
      </div>
      <div class="header-bottom" @click="$router.push('/search')">
        <i class="iconfont icon-RectangleCopy"></i>
        <p>商品/店铺</p>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lunboPic">
      <div class="swiper-container" ref="horizontal">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://image1.suning.cn/uimg/cms/img/157743017269279088.jpg?format=_is_1242w_610h" alt="sw1">
            </div>
            <div class="swiper-slide">
              <img src="https://image.suning.cn/uimg/aps/material/157743059008290447.jpg?format=_is_1242w_610h" alt="sw2">
            </div>
            <div class="swiper-slide">
              <img src="https://image.suning.cn/uimg/aps/material/157735273211061306.jpg?format=_is_1242w_610h" alt="sw3">
            </div>
            <div class="swiper-slide">
              <img src="https://oss.suning.com/aps/aps_learning/iwogh/2019/12/24/17/iwoghBannerPicture/3d08ecbe99354acc953d907aed3309e0.png?format=_is_1242w_610h" alt="sw4">
            </div>
            <div class="swiper-slide">
              <img src="https://oss.suning.com/aps/aps_learning/iwogh/2019/12/26/18/iwoghBannerPicture/8125fcae242446e4af2dc932149b6b8e.png?format=_is_1242w_610h" alt="sw2">
            </div>
            <div class="swiper-slide">
              <img src="https://oss.suning.com/aps/aps_learning/iwogh/2019/12/26/15/iwoghBannerPicture/58cd3889f3054dc38e21011b4f7d8148.png?format=_is_1242w_610h" alt="sw3">
            </div>
            <div class="swiper-slide">
              <img src="https://oss.suning.com/aps/aps_learning/iwogh/2019/12/27/20/iwoghBannerPicture/ce5badb3cde74ee4ac5900249dc35fa8.png?format=_is_1242w_610h" alt="sw4">
            </div>
            <div class="swiper-slide">
              <img src="https://image.suning.cn/uimg/aps/material/157733037001212717.jpg?format=_is_1242w_610h" alt="sw4">
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 遮罩 -->
        <div class="shade"></div>
      </div>
    </div>
    
    <!-- 首页十个导航 -->
    <div class="categoryContainer">
      <ul class="categoryUl">
        <li v-for="(item,index) in cate" :key="index">
          <img :src="item.picUrl" alt="">
          <p>{{item.elementName}}</p>
        </li>
      </ul>
    </div>
    <!-- 首页大图 -->
    <div class="imgContainer">
      <img class="bigImg" src="https://image3.suning.cn/uimg/cms/img/157745154670917877.gif" alt="">
      <div class="newUserImg">
        <img src="https://image1.suning.cn/uimg/cms/img/157330223943814123.png" alt="">
        <img src="https://image2.suning.cn/uimg/cms/img/157330224785306243.gif" alt="">
        <img src="https://image1.suning.cn/uimg/cms/img/157330227372982455.gif" alt="">
      </div>
    </div>
    <Discount/>
    <Recommend/>
    <HomeLike/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import Discount from '@components/home/Discount/Discount'
  import Recommend from '@components/home/Recommend/Recommend'
  import HomeLike from '@components/home/HomeLike/HomeLike'
  import {reqHomeCategory} from '@/api'
  export default {
    components:{
      Discount,
      Recommend,
      HomeLike
    },
    data(){
      return {
        cate:[]
      }
    },
    async mounted(){
      let result = await reqHomeCategory()
      if (result.status === 1) {
        this.cate = result.datas.enter_list.tag
      }
      new Swiper(this.$refs.horizontal, {
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #wrap
    margin-bottom 44px
    .header
      width 100%
      height 90px
      background-image url('https://image3.suning.cn/uimg/cms/img/157745204162934282.png')
      background-size 100% 90px
      position relative
      z-index 9
      .header-top
        display flex
        justify-content space-between
        padding 0 5%
        box-sizing border-box
        height 44px
        .img1
          width 18px
          height 30px
          margin-top 12px
        .img2
          width 260px
          height 28px
          padding 12px 15px 0 0
          margin-right 30px
          line-height 44px
          text-align center
      .header-bottom
        height 34px
        border-radius 17px
        margin 0 auto
        margin 5px 5%
        background-color #fff
        position relative
        .iconfont
          position absolute
          font-size 25px
          top 50%
          left 0
          margin-left 10px
          transform translateY(-50%)
          color #333
        p
          font-size 14px
          line-height 34px
          margin-left 35px
          color #333
    .lunboPic
      width 100%
      height 130px
      background-image url('https://image3.suning.cn/uimg/cms/img/157743563023681571.jpg')
      background-size 100%
      background-position top center
      .swiper-container
        width 90%
        height 130px
        --swiper-theme-color #fff
        position relative
        border-radius 8px
        .swiper-wrapper
          width 90%
          height 130px
          .swiper-slide
            width 90%
            height 130px
            display flex
            flex-wrap wrap
            img
              width 375px
              height 184px
              overflow hidden
              margin-top -54px
              text-align center
    .categoryContainer
      width 100%
      height 154px
      background-color #fff
      .categoryUl
        display flex
        flex-wrap wrap
        li
          width 20%
          height 50%
          text-align center
          margin-top 12px
          img 
            width 42px
            height 42px
    .imgContainer
      .bigImg
        width 100%
        margin-bottom 12px
        img 
          width 100%
          height 105px
      .newUserImg
        display flex
        height 117px
        img 
          height 100%
          width auto
</style>
