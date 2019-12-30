
import {REQ_BUYLIST,REQ_CoolMachine} from './mutation_type'

export default {
  [REQ_BUYLIST](state,data){
    state.data = data 
  },
  [REQ_CoolMachine](state,data){
     state.data = data
  }
}