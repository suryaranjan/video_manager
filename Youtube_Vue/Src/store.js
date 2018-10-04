import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        videos:" ",
        search:'jonas blue' ,
        videoSuggest:""
    },
    mutations:{
        
        searchResult(state,result){           
            
            state.videos = result;
        },
        searchNew(state,result){
            state.search = result;
        },
        searchSuggest(state,result)
        {
            state.videoSuggest = result;
        }
    },
   /* actions:{
        searchResult(context,result){
            console.log(result);
            context.commit('searchResult',result)
        }
    },*/
    getters:{
        getVideos(state){
            return state.videos;
        },
        getSearch(state){
            return state.search;
        },
        getVideoSuggest(state)
        {
            return state.videoSuggest;
        }
        
    }
})
