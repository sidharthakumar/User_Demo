


var userConnector = require('../connectors/user-connector')

var userResolver = {
    Query: {
        users(root, args, context){
            return userConnector.fetchUsers().then(users => users);
        }
    }
}

module.exports = userResolver




