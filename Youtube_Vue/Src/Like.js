let axios = require('axios');
const  Base_url = "http://127.0.0.1:8000/api";
var url="";
 var like ={

 create:function(options, callback){
   
   
   url=Base_url+ '/likes/create';
            axios({
                    method: 'post',
                    url: url,
                    data: {
                     id:options.id
                    }
                  }).then(() => {
                          if(callback){
                            callback()
                        }
                    }).catch(error => console.error(error));      
        
},
findAll:function(callback){
    url=Base_url+'/likes/index';
    axios.get(url)
            .then(response=>{
                if(callback){
//                    console.log(response);
//                    console.log(response.data);
                    callback(response)
                }
            })
},
findId:function(options,callback){
     
    url:Base_url+'/likes/show/'+options.id;
    axios.get(url).then(response=>{
        console.log(response);
        if(callback){
            callback(response)
        }
    })
}

 }
 
 module.exports=like;