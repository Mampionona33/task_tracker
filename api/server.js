const express = require('express');
const app = express();
const PORT = 8000;

// Construct a schema, using GraphQL schema language
const db = require('./db.json');
const fs = require('fs');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf-8');
const schema = makeExecutableSchema({ typeDefs });

// The root provides a resolver function for each API endpoint
const root = {
  TableHeaderList: () => {
    return db.tableHeader.map((txt) => {
      return txt.value;
    });
  },
  Fiche: () => {
    return db.fiche.map((fiches) => {
      return fiches;
    });
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`API server runing on ${PORT}`);
});
