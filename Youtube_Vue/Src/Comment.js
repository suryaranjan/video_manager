let axios = require('axios');
const  Base_url = "http://127.0.0.1:8000/api";
var url="";
 var comment ={

 create:function(options, callback){
   
   
   url=Base_url+ '/comment/create';
            axios({
                    method: 'post',
                    url: url,
                    data: {
                     id:options.id,
                     comment:options.comment
                    }
                  }).then(() => {
                          if(callback){
                            callback()
                        }
                    }).catch(error => console.error(error));      
        
},
findAll:function(callback){
    url=Base_url+'/comment/index';
    axios.get(url)
            .then(response=>{
                if(callback){
//                    console.log(response);
//                    console.log(response.data);
                    callback(response)
                }
            })
},
//findId:function(options,callback){
//     debugger;
//    url:Base_url+'/likes/show/'+options.id;
//    axios.get(url).then(response=>{
//        console.log(response);
//        if(callback){
//            callback(response)
//        }
//    })
//}

 }
 
 module.exports=comment;