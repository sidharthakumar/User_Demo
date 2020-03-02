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
    return fetch(url).then(response => response.json()).then(json =>json);
  },
    
  getOne(Id){
    const url = 'https://jsonplaceholder.typicode.com/users'
    return fetch(url).then(response => response.json()).then(function(json){
      for(var user in json){
        if (json[user].id == Id){
            return json[user];
        }
      }
      return null;
    });
  },

  save(user, context){
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(function(response){
          console.log(response.status);
          return response.json();
      }).then(json =>json);
  },

  update(user, context){
      url = 'https://jsonplaceholder.typicode.com/users' + '/' + user.user.id.toString();
      return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(function(response){
          console.log(response.status);
          return response.json();
      }).then(json =>json);
  
    },
    delete(Id, context){
        url = 'https://jsonplaceholder.typicode.com/users' + '/' + Id.toString();
        fetch(url, {
            method: 'DELETE'
            })
    }
}


module.exports = userConnector