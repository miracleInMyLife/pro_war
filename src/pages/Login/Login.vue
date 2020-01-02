<template>
  <div class="loginContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="header-nav">
        <div class="nav-left" v-show="!isPwdLogin">
          <a href="#">联系客服</a>
        </div>
        <div class="line" v-show="!isPwdLogin"></div>
        <div class="nav-right">
          <a href="#">{{isPwdLogin ? '联系客服' : '企业注册'}}</a>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="content">
      <h2>欢迎登陆苏宁易购</h2>
      <input v-model="phone" type="text" :placeholder="placeholder" maxlength="11">

      <!-- 清除按钮 -->
      <div class="clean" v-show="phone.length > 0" @click="clean">
        <img src="./images/icon_close.png" alt="">
      </div>
      

      <!-- 验证码登录 -->
      <div class="yanzheng" v-show="!isPwdLogin">
        <button :disabled="!isRightPhone || count>0" :class="{'yzm-active':phone.length === 11}" @click="getyzm">{{count === 0 ? '获取验证码' : count + 's'}}</button>
        <label class="label" for="yzminput">
          <span :class="{active:isShowHigh && yzminput.length === 0}" @click="showHigh()">{{yzminput.slice(0,1)}}</span>
          <span :class="yzminput.length === 1?'active':''">{{yzminput.slice(1,2)}}</span>
          <span :class="yzminput.length === 2?'active':''">{{yzminput.slice(2,3)}}</span>
          <span :class="yzminput.length === 3?'active':''">{{yzminput.slice(3,4)}}</span>
        </label>
        <input id="yzminput" v-model.trim="yzminput" type="number" maxlength="4">

      </div>

      <!-- 账号密码登录 -->
      <div class="pwd-login" v-show="isPwdLogin" v-model="pwd">
        <input type="text" placeholder="请输入密码" >
        <div class="eye">
          <img style="display:none" src="./images/eye_open.png" alt="">
          <img src="./images/eye_close.png" alt="">
        </div>
        <a href="#" class="wj-pwd">忘记密码</a>
      </div>

      <!-- 登录按钮 -->
      <div class="login" >
        <a class="phone-login" href="#" @click="login()">登录</a>
        <a class="select-login" href="#" @click="showPwdLogin">{{isPwdLogin ? '验证码登录' : '账号密码登录'}}</a>
      </div>

      
    </div>
    <!-- 底部 -->
    <div class="footer">
      <p>其他登录方式</p>
      <div class="icons">
        <img src="./images/icon_qq.png" alt="">
        <img src="./images/icon_epp.png" alt="">
        <img src="./images/icon_k.png" alt="">
      </div>
      <p class="agree">
        <span>我同意</span>
        <a href="#">《苏宁易购会员章程》</a>
        <a href="#">《易付宝协议》</a>
      </p>
    </div>

    <!-- 提示输入手机号 -->
    <!-- <div class="tishi" v-show="isShowError">
      <span v-model="tishi">{{showError}}</span>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import { Toast, MessageBox } from 'mint-ui'
  import { reqSmsCode } from '@/api'
  export default {
    data(){
      return {
        isPwdLogin:false,
        yzminput:'',
        isShowHigh:false,
        phone:'',
        count:0,
        pwd:''
      }
    },
    computed:{
      // 是否是一个正确的手机号
      isRightPhone () {
        return /^1\d{10}$/.test(this.phone)
      },
      placeholder(){
        if (this.isPwdLogin) {
          return '请输入手机号/用户名/邮箱'
        }else{
          return '请输入手机号'
        }
      },
      showError(){
        if (!this.phone) {
          this.isShowError = true
          this.tishi =  '请输入手机号 !'
        }else if(this.phone.length < 11){
          this.isShowError = true
          this.tishi =  '格式不对,请输入正确的手机号 !'
        }else{
          this.isShowError = false
        }
      }
    },
    methods:{
      // 展示密码登录
      showPwdLogin(){
        this.isPwdLogin = !this.isPwdLogin
      },
      // 展示高亮
      showHigh(){
        this.isShowHigh = true
      },
      // 清除输入框
      clean(){
        this.phone = ''
      },
      // 得到验证码
      async getyzm(){
        // let timeId
        this.count = 60
        console.log('aaa');
        // timeId = setInterval(() => {
        //   this.count--
        //   if (this.count <= 0) {
        //     this.count = 0
        //     clearInterval(timeId)
        //   }
        // }, 1000)

        // 发请求
        const result = await reqSmsCode(this.phone)
        console.log(this.phone);
        console.log(result);
        if (result.code===1) {
          Toast('验证码短信已发送')
          
        } else {
          // 停止倒计时
          this.count = 0
          MessageBox('提示', result.msg || '发送失败');
        }
      },
      // 登录
      async login(){
        const {isPwdLogin,phone,pwd,yzminput} = this
        let result
          if (isPwdLogin) {
            // 密码登陆
            result = await this.$API.reqTextLogin({phone,pwd})
          } else {
            // 短信登陆
            result = await this.$API.reqSmsLogin({phone,yzminput})
          }

          // 根据请求的结果, 做不同响应处理
          if (result.code===1) {
            const user = result.data
            // 将user保存到vuex的state
            this.$store.dispatch('saveUser', user) // 将user和token保存到state, 将token保存local

            // 跳转到个人中心
            this.$router.replace({path: '/recommend'})
          } else {
            MessageBox('提示', result.msg)
          }
      }
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    overflow hidden
    // 头部
    .header
      height 37px
      margin 7px 12px 0
      position relative
      .header-nav
        width 124px
        height 30px
        position absolute
        right 0
        top 50%
        margin-top -15px
        display flex
        justify-content space-between
        div
          width 48px
          height 30px
          line-height 30px
          text-align center
          a
            color #000
        .nav-right
          position absolute
          right 0
          
        .line
          width 1px
          height 18px
          position absolute
          right 50%
          top 50%
          margin-top -9px
          background #EEEEEE
    // 主体
    .content
      height 274px
      margin-top 28px
      padding 0 37.5px
      position relative
      h2
        font-size 18px
        color #222222
      input
        width 100%
        height 45px
        margin-top 30px
        font-size 15px
        color #000
        border-bottom 1px solid  #cccccc
        outline none
      .clean
        width 21px
        height 21px
        position absolute
        right 37px
        top 62px
        img 
          width 100%
          height 100%

        // 验证码登录
      .yanzheng
        width 100%
        height 39px
        margin-top 15px
        .yzm-active
          color #000000
        .label  
          span 
            vertical-align middle
            border-bottom 1px solid silver
            display inline-block
            height 39px
            width 39px
            margin-right 12px
            text-align center
            line-height 39px
            color #222
            font-size 24px
            position relative
            &.active::after
              content ""
              display block
              width 1px
              height 20px
              border-right 1px solid yellow
              position absolute
              left 50%
              top 50%
              margin-top -10px
            &:last-child
              margin 0
            &.highlight 
              border-color purple
                /* 去掉input[type=number]浏览器默认的icon显示 */
        input
          opacity 0
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button  // chrome
            -webkit-appearance none
            appearance none
            margin 0
        input // 火狐
            -moz-appearance textfield
        button 
          display block
          width 99px
          height 39px
          color #cccccc
          border 1px solid #ccc
          background white
          border-radius 5px
          float right 
          text-align center
          line-height 39px
          font-size 15px
     
      // 密码登录
      .pwd-login
        height 45px
        margin-top 12px
        background pink 
        position relative
        input 
          position absolute
          bottom 0
          left 0
        .eye
          width 21px
          height 21px
          position absolute
          right 55px
          top 50%
          margin-top -10.5px
          img 
            width 100%
            height 100%
        .wj-pwd
          display block
          width 48px
          height 45px
          font-size 12px
          color #333
          position absolute
          right 0
          text-align center
          line-height 45px




      .login
        height 88px
        margin-top 30px
        .phone-login
          height 45px
          display block
          background #ffcc00
          border-radius 6px
          font-size 17px
          color #000000
          text-align center
          line-height 45px
        .select-login
          display block
          font-size 15px
          text-align center
          margin-top 21px
          color #000000
    // 底部
    .footer
      width 240px
      height 96px
      position absolute
      left 50%
      bottom 17px
      margin-left -120px
      // background pink
      p
        text-align center
        height 18px
        color #999999
        margin-bottom 10px
        position relative
        &::before,&::after
          content ""
          display block
          width 75px
          height 1px
          border-bottom 1px solid #dddddd
          position absolute
          top 50%
          margin-top -1px
        &::after
          right 0
      .icons
        height 33px
        margin-bottom 17px
        display flex
        justify-content space-between
        img 
          width 33px
          height 33px
      .agree
        a
          color #101010
    

    //提示
    .tishi
      width 325px
      height 52px
      background rgba(0,0,0,.6)
      border-radius 5px
      position absolute
      left 50%
      top 300px
      margin-left -162.5px
      text-align center
      line-height 52px
      font-size 15px
      color white

          
        

</style>
