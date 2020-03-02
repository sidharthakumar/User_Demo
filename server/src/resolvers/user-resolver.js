


var userConnector = require('../connectors/user-connector')

async function getUsers(){
    return  await userConnector.fetchUsers();
}
var userResolver = {
    Query: {
        users(root, args, context){
            return getUsers();
        }
    }
}

module.exports = userResolver




