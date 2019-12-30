
import {REQ_BUYLIST,REQ_CoolMachine,REQ_GUESSLIKE} from './mutation_type'
import {reqBuyList,reqCoolMachine,reqGuessLike} from '../api/index'

export default{
   async getSelect({commit}){
    let result = await reqBuyList()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_BUYLIST,data)
    }
   },
   async getCoolMachine({commit}){
    let result = await reqCoolMachine()
    if(result.status === 1){
      const data = result.datas
      commit(REQ_CoolMachine,data)
    }
   },
   async getGuessLike({commit}){
    let result = await reqGuessLike()
    if(result.status === 1){
      
      const data = result.datas.skus
      commit(REQ_GUESSLIKE,data)
    }
   },
}