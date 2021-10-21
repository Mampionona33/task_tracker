const express = require('express');
const app = express();
const PORT = 8000;

const { MongoClient } = require('mongodb');
const url =
  'mongodb+srv://mampionona:daddy4806@cluster0.tksr3.mongodb.net/task_tracker?retryWrites=true';
let db;

// connect to mongodb database
async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connect to MongoDb at', url);
  db = client.db();
}

async function getTableHeaderMongo() {
  const tableHeader = await db.collection('tableHeader').distinct('value');
  return tableHeader;
}

async function getFicheMongo() {
  const fiches = await db.collection('fiches').find({}).toArray();
  return fiches;
}

// Construct a schema, using GraphQL schema language
// const db = require('./db.json'); //local database
const fs = require('fs');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf-8');
const schema = makeExecutableSchema({ typeDefs });

// The root provides a resolver function for each API endpoint
const root = {
  GetTableHeaderList: () => {
    const tableHeader = getTableHeaderMongo();
    return tableHeader;
  },
  GetFiches: () => {
    const fiches = getFicheMongo();
    return fiches;
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

(async function () {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`API server runing on ${PORT}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();
