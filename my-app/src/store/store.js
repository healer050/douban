import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
export const store = new Vuex.Store({
    // ...
    state:{
        axiosarr:[],
        mid:""

    },
    getters:{
        getmoivearr(state){
            var filterarr = state.axiosarr.movie.filter((v,i)=>{
                if(i<6){
                    return v
                }
            })
            console.log(filterarr);
            
            return filterarr;
            
        },
        getdmoive(state){
            return state.axiosarr.movie
        },
        getindexarr(state){
            console.log(state.axiosarr.shouye);
            return state.axiosarr.shouye

        }
    },
    mutations:{
        maxios(state,payload){
            state.axiosarr = payload;
            // console.log(state.axiosarr);
        },
        mupdata(state,payload){
            state.mid = payload;
        }
    },
    actions:{
        axiosIndex(context){
            axios({
                url:"/link/data",
                method:"get"
            }).then((ok)=>{
                // console.log(ok);
                context.commit("maxios",ok.data);
            })
        }
    }
})