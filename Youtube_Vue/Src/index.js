import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from '../app.vue'
import vueDebounce from 'vue-debounce';
import VueRouter from 'vue-router'
import Videoplay from './Feed/Videoplay.vue'
import Youtube from './youtube.vue'


Vue.use(vueDebounce);
Vue.use(VueRouter);


const routes = [
    {path: '/video/:id', component:Videoplay , name:'play' },
    {path: '/', component:Youtube, name:'youtube' },
    
]

const router = new VueRouter({
    routes
});


new Vue({
  router, 
  
  el:'#root',
  render:h=>h(App)
})


