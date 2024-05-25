import fastify from "fastify";
import { articlesRoutes } from "./router/articles";
import cors from '@fastify/cors'


const app = fastify();

app.register(cors)
app.register(articlesRoutes, { prefix: 'articles' })

app.listen({ port: 3333 }).then(() => console.log("Server Running!"));
