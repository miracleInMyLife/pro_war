
import {REQ_BUYLIST,REQ_CoolMachine} from './mutation_type'
import {reqBuyList,reqCoolMachine} from '../api/index'

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

}