import { FastifyInstance } from "fastify"

export const articlesRoutes = async (app: FastifyInstance) => {
    app.get('/main', (req, res) => {
        const articles = []

        return {
            articles: articles
        }
    })
    app.get('/secondary', async () => { })
    app.get('/:id', async () => { })
}