<template>
    <div class="videoPlay_wrapper">
        <TextInput  @searchResult="handleResult"></TextInput>
        <div>
           
            <div class='video_container'>
               
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe v-bind:src="url" class="embed-responsive-item"></iframe>
                </div>
                <VideoDetails v-bind:video="video"></VideoDetails>
               
            </div>
            <div class="videoPlay_videoGroup">  
                <videoGroup ></videoGroup>
            </div>
        </div>
    </div>
</template>

<script>
     import Search from '../Search.js'
    import VideoGroup from './VideoGroups.vue'
    import TextInput from '../BasicComponents/TextInput.vue'    
   import { store } from '../store.js'
   import { mapMutations } from 'vuex'
   import { mapState } from 'vuex'
   import VideoDetails from '../BasicComponents/VideoDetails.vue'
    export default {
       name:'VideoPlay',
       store,
    data(){
        return{
           videos:null,
           video:null,
           videoId:null,
           url:null,
           
        }
    },
    
    created(){
             if(this.$route.params.video === undefined){
                 this.$router.push({name:'youtube'})
             }
               console.log(this.$route.params.video)
               console.log(this.$route.params.id)
            this.vedioId=this.$route.params.id;
           
            this.url=`https://www.youtube.com/embed/${this.$route.params.id}`;
            this.video = this.$route.params.video;
             
            Search({
                apiKey:'AIzaSyDXs2aOmr6ld_dEij790yJkyHoGr5ZO5sg',
                term:this.$route.params.video.snippet.title
            },response => this.handleResult(response)); 
        },
   
        components:{
             VideoGroup,
             TextInput,
             VideoDetails
         },
         
        ...mapState([
            'search',
            'videos'
        ]),
        
        methods:{
         ...mapMutations([
            'searchResult',
            'searchNew'
        ]),
        
        handleResult(data)
        {
            this.searchResult(data) ;         
        },
        likeIt(){
            
        }
       
    }
    
}

    
    
</script>
<style>
    .videoPlay_wrapper{
            overfloaw:hidden;
            width:80%;
            margin:auto;
    }
    .video_container
    {
            float:left;
            width:50%;
            
    }
    .videoPlay_videoGroup{
            float:right;
            width:40%;
            margin-left:20px;
    }
   
</style>