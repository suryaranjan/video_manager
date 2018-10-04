<template>
    <div>
<div class="form-group ">
    <form v-on:submit.prevent="searchInput">
        <img src="../Image/youuu.png" height:10 width:30 >
        
            <input v-model="searchh" id="inputEle" list="suggestio" v-on:keyup.stop.prevent="searchSuggestion"  class="form-control col-sm-6 dropdown-content" style="display:inline;" >     
            <datalist id="suggestio" >               
                <option v-for="video in videoSuggest"  v-bind:value="video.snippet.title"></option>
            </datalist>
           
        
        <button class="btn btn-primary col-sm-2" v-on:click="searchInput.bind(this)" ><i class="fa fa-search"></i>Search</button>
     </form> 
   
</div>
    
         </div>
</template>

<script>
    import Search from '../Search.js';
    import _ from 'lodash';
    import { store } from '../store.js'
    import { mapMutations } from 'vuex'
    import { mapState } from 'vuex'
    
    export default{
            
            name:'TextInput',
            store, 
        data(){
            return{
               
               
                searchh:''
            }
        },
        computed:{
                    ...mapState([
                        'search',
                        'videos',
                        'videoSuggest'
                    ])  
        },
        methods:{
            
            searchInput:function() {
                this.searchNew(this.searchh);
                    //document.getElementById('suggestio').style.display="none";
                    Search({
                        apiKey:'AIzaSyDXs2aOmr6ld_dEij790yJkyHoGr5ZO5sg',
                        term:this.search
                    },data =>{
                        this.searchResult(data);
                        
                        this.searchNew(null);
                        this.searchSuggest(null);
                        this.searchh=" ";
                        //document.getElementById('suggestio').style.display="none";
                        document.getElementById('inputEle').blur();
                       
                    })
//                    this.$emit('search',this.search)
                    
               },
                searchSuggestion:function() {
                   this.searchNew(this.searchh);
                    //document.getElementById('suggestio').style.display="block";
                   
                    var self = this;
                    Search({
                        apiKey:'AIzaSyDXs2aOmr6ld_dEij790yJkyHoGr5ZO5sg',
                        term:self.search
                    },response =>{
                       
                        self.searchSuggest(response);
                        
                    })
//                    this.$emit('search',this.search)
                    
               },
            ...mapMutations([
                'searchResult',
                'searchNew',
                'searchSuggest'
            ])
              
    },
   
    }
   
</script>

<style>
    .form-group{
            margin:auto;
            margin-right:12%;
            width:70%;
    }
    button{
            margin-bottom:3px;
    }
     .dropdown{
        
       
    }
  
   
   
</style>