<template>
    <div>
        <router-view  :key="$route.fullPath" ></router-view>
    </div>
</template>

<script>
import youtube from './Src/youtube.vue'
import videoPlay from './Src/Feed/VideoPlay.vue'
export default{

name:"App",

    data(){
        return{
    
        }
    },
components:{
        youtube,
        videoPlay
    }
}
</script>

<style>

</style>