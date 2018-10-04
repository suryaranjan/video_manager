let axios = require('axios');
let BASE_URL = "https://www.googleapis.com/youtube/v3/search";

module.exports = function(options, callback){
    if(!options.apiKey){
        throw new Error('youtube search would require a key');
    }
    
    params = {
        part: 'snippet',
        key: options.apiKey,
        q: options.term,
        maxResults: (options.item) ? options.item : 10,
        type: 'video'
    };
    
    axios.get(BASE_URL,{ params })
        .then(response => {
            if(callback){
                callback(response.data.items)
            }
        })
        .catch(error => console.error(error));
}
