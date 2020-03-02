var userResolver = require('./user-resolver');
var merge = require("lodash.merge");
var resolvers = merge(
    userResolver
);

module.exports = resolvers;