
import {REQ_BUYLIST,REQ_CoolMachine,REQ_GUESSLIKE} from './mutation_type'

export default {
  [REQ_BUYLIST](state,data){
    state.data = data 
  },
  [REQ_CoolMachine](state,data){
     state.data = data
  },
  [REQ_GUESSLIKE](state,data){
    state.guessLike = data
  }
}