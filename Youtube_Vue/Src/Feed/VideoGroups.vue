<template>
    <div class="container">
        <VideoItem v-for="(video, index) in this.videos"
                   v-bind:video="video"
                  >
                   
                       
        </VideoItem>
    </div>
</template>

<script>
    import VideoItem from "./VideoItem.vue"
    import { store } from '../store.js'
    import { mapState } from 'vuex'
    
    export default{
    name:"VideoGroup",
    data(){
            return{
                
            }
        },
        store,
        computed:{
            ...mapState([
                'videos'
            ])
            },
    
    
    components:{
        VideoItem
    }
    }
</script>