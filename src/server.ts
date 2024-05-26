import fastify from "fastify";
import { articlesRoutes } from "./router/articles";
import cors from '@fastify/cors'
import 'dotenv/config'


const app = fastify();

app.register(cors)
app.register(articlesRoutes, { prefix: 'articles' })

app.listen({ port: parseInt(process.env.PORT!) }).then(() => console.log("Server Running!"));
