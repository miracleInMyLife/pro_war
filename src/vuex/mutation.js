
import {REQ_BUYLIST,REQ_CoolMachine,REQ_TABBAR,REQ_ELECTRICS,REQ_CATEGORY,REQ_GUESSLIKE,REQ_SEARCHLIST,CLEARSEARCHLIST,SORTSEARCH} from './mutation_type'

export default {
  [REQ_BUYLIST](state,data){
    state.data = data 
  },
  [REQ_CoolMachine](state,data){
     state.data = data
  },
  [REQ_TABBAR](state,data){
    state.data = data
  },
  [REQ_ELECTRICS](state,data){
   state.data = data
  },
  [REQ_CATEGORY](state,data){
    state.data = data
  },

  [REQ_GUESSLIKE](state,data){
    state.guessLike = data
  },
  [REQ_SEARCHLIST](state,data){
    state.searchList = data
  },
  [CLEARSEARCHLIST](state){
    state.searchList = []
  },

  // 搜索排序
  [SORTSEARCH](state,newData){
    state.searchList =newData
  }
}