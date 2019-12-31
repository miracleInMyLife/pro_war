<template>
<div>
  <input type="text" v-model="phoneNum">
  <input type="text" v-model="code">
  <button @click="senCode">发送验证码</button>
  <button @click="login">登录</button>
  <input type="text" v-model="username">
  <input type="text" v-model="pwd">
  <button @click="loginPwd">用户名登录</button>
</div>
</template>
<script>
import {reqSmsCode,reqSmsLogin,reqTextLogin} from '../../api/index'
export default {
  data() {
    return {
      phoneNum:'',
      code:'',
      username:'',
      pwd:''
    }
  },
  methods: {
    async senCode(){
      let result = await reqSmsCode(this.phoneNum)
      console.log(result)
    },
    async login(){
      let result = await reqSmsLogin(this.phoneNum,this.code)
      console.log(result)
    },
    async loginPwd(){
      let result = await reqTextLogin(this.username,this.pwd)
      console.log(result)
    }
  },
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
input 
  width 120px
  height 50px
  border 1px solid #ff6600
</style>