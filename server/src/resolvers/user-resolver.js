


var userConnector = require('../connectors/user-connector')

var userResolver = {
    Query: {
        users(root, args, context){
            return userConnector.fetchUsers().then(users => users);
        },

        user(root, args, context){
            return userConnector.getOne(args.id).then(user => user);
        }
    },

    Mutation:{
        createUser(parent, args, context){
            return userConnector.save(args).then(user => user);
        }
    }
}

module.exports = userResolver




