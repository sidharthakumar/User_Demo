/**
 * User connector responsible for connecting to mock backend
 * and return data
 * 
 * 
 */



process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
const fetch = require('node-fetch');

var userConnector = {
    fetchUsers(){
            const url = 'https://jsonplaceholder.typicode.com/users'
            return fetch(url).then(response => response.json()).then(function(json){
                return json
            });
        }
}


module.exports = userConnector