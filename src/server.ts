import express from "express";

import express_graphql from "express-graphql";
import { buildSchema } from "graphql";

const message = 'Cadê a coxinha?!';

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = { 
  message: () => message
}

const server = express();
server.get("/", (_, res) => {
  res.send(message);
});

server.get("/graphql", express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

export default server;