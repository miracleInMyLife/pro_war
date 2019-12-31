
import {REQ_BUYLIST,REQ_CoolMachine,REQ_TABBAR,REQ_ELECTRICS,REQ_CATEGORY,REQ_GUESSLIKE,REQ_SEARCHLIST} from './mutation_type'
import {reqBuyList,reqCoolMachine,reqTabBar,reqElectrics,reqCategory,reqGuessLike,reqSearchList} from '../api/index'

export default{
  // 精选
  async getSelect({commit}){
    let result = await reqBuyList()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_BUYLIST,data)
    }
    },
  //  酷机
    async getCoolMachine({commit}){
    let result = await reqCoolMachine()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_CoolMachine,data)
    }
    },
  //  头部导航
    async getTabBar({commit}){
    let result = await reqTabBar()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_TABBAR,data)
    }
    },
  //  家电
  async getElectrics({commit}){
    let result = await reqElectrics()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_ELECTRICS,data)
    }
    },
    //  分类
  async getCategory({commit}){
    let result = await reqCategory()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_CATEGORY,data)
    }
   },

   async getGuessLike({commit}){
    let result = await reqGuessLike()
    if(result && result.status === 1){
      
      const data = result.datas.skus
      commit(REQ_GUESSLIKE,data)
    }
   },
   async getSearchList({commit},keyword){
    let result = await reqSearchList(keyword)
    if(result.status === 1){
      const data = result.datas.skus
      console.log(data)
      commit(REQ_SEARCHLIST,data)
    }
   },
}