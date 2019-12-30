<template>
  <div class='channelContainer'>
      <!-- <div class='topNav'>
        <div class="navLeft">
          <span class="iconfont">&#xe642;</span> 
        </div>
        <div class="navRight"></div>
      </div>
      <div class="tabNav" ref="tabNav" :class="{fixed:isFixed}">
        <ul class="content">
          <li class='tabLi' v-for="(item,index) in items" :key="index" :class="{active:selectedId === index}" @click="tabNav(index)">
            <div class='liContent'>
              <img src="../../../imgs/1.png" alt="">
              <i>{{item.label}}</i>
            </div>
          </li>
        </ul>
      </div>      -->
      <Header/>

      <div class="floor" >
          <AppList></AppList>
          <div class="floor-bottom">
            <div class="bottom-top">
              <div class="gl-bg" v-if="data.skus">
                <img :src="data.skus[1].imageUrl" alt="">
                <i class="gl-tag">
                  <span class="f28 bold" >{{data.skus[1].displayJson.productCnt}}</span>
                  <span class='f28'>商品</span>
                </i>
                <p class="line-clamp-2">{{data.skus[1].title}}</p>
              </div>
            </div>
            <ul class='pic-img'  v-if="data.skus">
              <li class='bottom-li' v-for="(gd,index) in data.skus" :key="index">
                  <div class='_img' >
                    <div class="zhezhao"></div>
                    <!-- <img :src="" alt=""> -->
                    <i class="f24">蒙牛蒙牛蒙牛蒙牛蒙牛蒙牛 </i>
                  </div>
                  <div class='pro-price'>
                    <i class="acDec borders" style="border:none;height:14px">领券中心</i>
                    <i class='rPrice'>￥47.5</i>
                  </div>
              </li>
              <!-- <li class='bottom-li'>
                  <div class='_img' >
                    <div class="zhezhao"></div>
                    <img src="//imgservice.suning.cn/uimg1/b2c/image/tgalVdcl7oCnki7huPIdxQ.jpg?format=400h_400w_4e_80q.webp" alt="">
                    <i class="f24">蒙牛蒙牛蒙牛蒙牛蒙牛蒙牛 </i>
                  </div>
                  <div class='pro-price'>
                    <i class="acDec borders" style="border:none;height:14px">领券中心</i>
                    <i class='rPrice'>￥47.5</i>
                  </div>
              </li>
              <li class='bottom-li'>
                  <div class='_img' >
                    <div class="zhezhao"></div>
                    <img src="//imgservice.suning.cn/uimg1/b2c/image/tgalVdcl7oCnki7huPIdxQ.jpg?format=400h_400w_4e_80q.webp" alt="">
                    <i class="f24">蒙牛蒙牛蒙牛蒙牛蒙牛蒙牛 </i>
                  </div>
                  <div class='pro-price'>
                    <i class="acDec borders" style="border:none;height:14px">领券中心</i>
                    <i class='rPrice'>￥47.5</i>
                  </div>
              </li> -->
            </ul>
          </div>
      </div> 

  </div>
</template>

<script>

    // import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    // import {getSelect} from '../../../api/index'

	export default {

    computed: {
      ...mapState(['data']),

    },
    mounted() {
      this.$store.dispatch('getSelect')
    },

  // mounted() {
  //      new BScroll(this.$refs.tabNav,{
  //       scrollX: true,
  //       click: true
  //     }),
  //     window.addEventListener('scroll',this.handleScroll)
  // },
  // methods: {
  //   tabNav(index){
  //     this. selectedId = index
  //   },
  //   handleScroll(){
  //     let  scrollTop = window.pageYOffset || 
  //     document.documentElement.scrollTop ||
  //      document.body.scrollTop;
  //     // let offsetTop = document.querySelector('.tabNav').offsetTop
  //       if (scrollTop > 300) {
  //       this.isFixed = true
  //       } else {
  //       this.isFixed = false
  //       }
  //   }
  // },
  //  destroyed () {
  //   window.removeEventListener('scroll', this.onScroll)
  // },

    
  // data () {
  //   return {
  //     selectedId: 0,

  //     items: [
  //       {label: '首页'},
  //       {label: '推荐'},
  //       {label: 'Android'},
  //       {label: '前端'},
  //       {label: '后端'},
  //       {label: 'iOS'},
  //       {label: '产品'},
  //       {label: '人工智能'},
  //       {label: '设计'}
  //     ],
  //     isFixed:false
     
  //   }
  // }



}
</script>

<style scoped lang="stylus" >
    .channelContainer
      width 100%
      height 100%
      overflow-x hidden
      // position relative
      .floor
        width 100%
        height 2340px
        color #333333   
        padding 10px 0 0;
        background-color: rgba(0,0,0,0.03);
        font-style: normal;
        .floor-bottom
          width 343px
          height 354px
          border 1px solid transparent 
          padding 0 5px
          margin 0 0 10px 10px
          background-color #fff
          border-radius 4px
          float left 
          .bottom-top
            width 343px
            height 169px
            margin-top 5px
            .gl-bg
              position relative
              img 
                width 343px
                height 169px
              .gl-tag
                width 52px
                height 25px
                position: absolute;
                top: 5px;
                right: 15px;
                color: #fff;
                background: rgba(0,0,0,0.2);
                border-radius: 4px;
                font-size: 15px;
                text-align: center;
                line-height: 25px;
                border: 1px solid #fff;
                font-style: normal;
              .line-clamp-2
                position absolute
                bottom 10px
                left 50%
                transform translate(-50%)
                font-size 18px
                color #fff
                font-weight bold
                white-space nowrap
          .pic-img
            width 341px
            height 165px
            padding 10px 0 10px 5px
            .bottom-li
              width 110px 
              height 165px
              margin  0 2px 0 0
              box-sizing  border-box
              float left 
              ._img 
                width 115px
                height 115px
                position relative
                .zhezhao
                  width 110px
                  height 110px
                  background-color rgba(0,0,0,0.03);
                  position absolute
                  left 0
                  top 0
                img 
                  width 110px
                  height 110px
                .f24
                  display block
                  overflow: hidden;
                  white-space: nowrap; 
                  text-overflow: ellipsis;                                  
                  width 95px
                  margin 5px 0 0 10px
                  font-style: normal;
              .pro-price
                width: 100%;
                color: #a5a5a5;
                text-align: center;
                display flex
                flex-direction column
                justify-content center
                align-items center
                margin-top 20px
                font-style: normal;
                .acDec
                  margin: 0 auto;
                  border-radius: 2px;
                  color: #fe053a;
                  padding: 3px;
                  border: 1px solid #ff2a57;
                  font-style: normal;
                  &.borders
                    border: 1px solid #ff2a57;
                    background: #ffedef
                    font-style: normal;
                  .rPrice
                    color #a5a5a5
                    margin  5px 0 0 0
                    width 100%
                    text-align center
                    font-style normal
         
          












                    
                   
               




          



 




</style>
