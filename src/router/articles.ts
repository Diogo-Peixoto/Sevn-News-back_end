import { FastifyInstance } from "fastify"

export const articlesRoutes = async (app: FastifyInstance) => {
    app.get('/main-articles', async () => { })
    app.get('/secondary-articles', async () => { })
    app.get('/article/:id', async () => { })
}