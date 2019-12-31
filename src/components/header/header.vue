<template>
  <div headerContainer>
    <div class='topNav'>
        <div class="navLeft">
          <span class="iconfont">&#xe642;</span> 
        </div>
        <div class="navRight"></div>
    </div>
    <div class="tabNav" ref="tabNav" :class="{fixed:isFixed}">
        <ul class="content">
          <li class='tabLi' v-for="(item,index) in data.data" :key="index" :class="{active:selectedId === index}" @click="tabNav(index)">
            <div class='liContent'>
              <img :src="item.dbExtInfo" alt="">
              <i>{{item.enrollCateName}}</i>
            </div>
          </li>
        </ul>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import {mapState} from 'vuex'

  export default {
    mounted() {
   
    // 页面滑动一段距离后，导航固定===》吸顶效果
       document.addEventListener('scroll',this.handleScroll)

    //  发请求
    this.$store.dispatch('getTabBar')

    },
    computed: {
      ...mapState(['data'])
    },
    watch: {
        data(){
          this.$nextTick(()=>{
            //  导航左右滑动
            new BScroll(this.$refs.tabNav,{
              scrollX: true,
              click: true
            })

          })
        },
    },

    methods: {
      tabNav(index){
        this. selectedId = index
      },
      handleScroll(){
        // console.log("###")
        let  scrollTop = window.pageYOffset || 
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        // let offsetTop = document.querySelector('.tabNav').offsetTop
          if (scrollTop > 35) {
          this.isFixed = true
          } else {
          this.isFixed = false
          }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.onScroll)
    },   
  data () {
    return {
      selectedId: 0,
      isFixed:false
     
    }
  }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    // .headerContainer
    //   // width 100%
    //   // height 100%
    //   overflow-x hidden
      // position relative
      // margin-bottom 10px
      .topNav
        position relative;
        height 43px;
        background #fff ;
        font-size 25px;
        border-bottom 1px solid #DCDCDC;
        color #333333;
        .navLeft
          position absolute;
          left 3px;
          top 0;   
          width 25px;
          height 40px;
          margin  14px;
          .iconfont
            display block
            font-size 22px
        .navRight
          color #fff;
          width 255px
          height 44px
          margin 0 auto;
          background-image url(imgs/tittle.png);
          background-repeat no-repeat;
          background-size 75px 20px;
          background-position center;
          z-index 10;
      .tabNav
        height 58px
        background-color red
        position relative
        padding-right 65px
        &.fixed
          position fixed
          z-index 999
          top 0
          left 0
        ul 
          width:750px;
          height: 58px;
          background-color red
          padding: 0;
          margin: 0;
          .tabLi
            height: 100%;
            width 75px;
            float left
            white-space: nowrap;
            &.active
              background: #cd0031;
            .liContent
              width 75px;
              height 100%;         
              text-align center
              img 
                width 25px
                height 25px
                margin 8px 0 
                font-size 15px
                vertical-align middle
                text-align center
              i  
                display flex;
                align-items center;
                justify-content center;
                color: #fff;
                font-size 15px;
                vertical-align middle
                text-align center
                font-style: normal;
      
 
</style>
