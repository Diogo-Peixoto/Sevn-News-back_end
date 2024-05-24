import fastify from "fastify";
import { articlesRoutes } from "./router/articles";

const app = fastify();

app.register(articlesRoutes, { prefix: 'articles' })

app.listen({ port: 3333 }).then(() => console.log("Server Running!"));
