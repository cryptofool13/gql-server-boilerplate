import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import uuidv4 from "uuid/v4";

import schema from "./schema";
import resolvers from "./resolvers";
import models from "./models";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1]
  }
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 3000 }, () => {
  console.log(`Apollo server on http://localhost:3000/graphql`);
});
