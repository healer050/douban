import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
export const store = new Vuex.Store({
    // ...
    // state:{
    //     axiosarr:[],
    //     mid:""

    // },
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        //id
        axiosarr:[],
        mid:""
    },
    getters:{
        // getmoivearr(state){
        //     // var filterarr = state.axiosarr.movie.filter((v,i)=>{
        //     //     if(i<6){
        //     //         return v
        //     //     }
        //     // })
        //     // console.log(filterarr);
            
        //     // return filterarr;
        //     return state.axiosarr
            
        // },
        getdmoive(state){
            return state.axiosarr.movie
        },
        getbooks(state){
            console.log(state.axiosarr.books);
            return state.axiosarr.books
        },
        getindexarr(state){
           
            return state.axiosarr.shouye

        },
        getgoodmovie(state){
            console.log(state.axiosarr.faxianhaodianying);

            return state.axiosarr.faxianhaodianying
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