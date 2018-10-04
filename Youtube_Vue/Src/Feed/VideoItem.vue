<template>
    <div class="VideoItem__wrapper">
        <div class="card" >
            <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle" style="width:30%; display:inline-block">
            <div class="crad-body" style=" width:60%; display:inline-block">
                <h5 class="card-title">{{videoTitle}}</h5>
                <p class="card-text">{{videoDescription}}</p>               
            </div>
            <router-link class='btn btn-default' :to="{name:'play',params:{id: video.id.videoId, video: video}}">Play</router-link>
             
        </div>
    </div>
</template>

<script>
    export default{
    name:"VideoItem",
        data(){
            return{
    
            }
       },
       props:[
        'video',
        'videoId',
        'url',
    ],
   
    computed:{
        videoTitle(){
            return this.video.snippet.title;
        },
        videoDescription(){
            return this.video.snippet.description;
        },
        videoImage(){
            return this.video.snippet.thumbnails.medium.url;
        },
        
    }

}

</script>

<style>
</style>