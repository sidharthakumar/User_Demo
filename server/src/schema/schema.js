/**
 * This is the main GraphQL Schema implementation.
 */


var gqlTools = require('graphql-tools');
var gqlImport = require('graphql-import');
var resolvers = require('../resolvers');


var typeDefs = gqlImport.importSchema('../assets/schema/schema.graphql');
var makeOptions = { typeDefs, resolvers };
var execSchema = gqlTools.makeExecutableSchema(makeOptions);

module.exports = execSchema;