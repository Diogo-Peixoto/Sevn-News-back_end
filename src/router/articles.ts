import { FastifyInstance } from "fastify"
import { dataMainArticles } from "../data"

export const articlesRoutes = async (app: FastifyInstance) => {
    app.get('/main', (req, res) => {
        const articles = dataMainArticles.filter((article) => article.rank <= 3).sort()

        return { articles }

    })
    app.get('/secondary', async () => { })
    app.get('/:id', async () => { })
}