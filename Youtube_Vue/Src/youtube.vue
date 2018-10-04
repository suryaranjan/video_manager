<template>
    <div>
        <TextInput></TextInput>  

        <div class="videoGroup__wrapper">
            <VideoGroup v-if="state == true"></VideoGroup>
        </div>
    </div>
</template>

<script>
    import Search from './Search.js'
    import VideoGroup from './Feed/VideoGroups.vue'
    import TextInput from './BasicComponents/TextInput.vue'    
    import {store} from './store.js'
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
  //  import { mapActions } from 'vuex'
    export default {
       name:'youtube',
    data(){
        return{
           state:false
            
        }
    },
    store,
    created(){
           
        Search({
               apiKey:'AIzaSyDXs2aOmr6ld_dEij790yJkyHoGr5ZO5sg',
               term:this.search
           },response => this.handleResult(response)); 
         
    },
    mounted(){
        this.state=true;
    },
    computed:{
            ...mapState([
                    
               'search',
              'videos'
            ])
           
           /* ...mapActions([
                'searchResult'
            ])*/
    },
   components:{
        VideoGroup,
        TextInput
        
    },
    methods:{
        handleResult(data)
        {
            
            this.searchResult(data);
            
        },
         ...mapMutations([
                'searchResult'
            ])
    }
    
}

</script>
<style>
   
      
</style>