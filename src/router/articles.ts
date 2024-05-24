import { FastifyInstance } from "fastify"
import { dataMainArticles } from "../data"
import { z } from "zod"

export const articlesRoutes = async (app: FastifyInstance) => {
    app.get('/main', (req, res) => {
        const articles = dataMainArticles.filter((article) => article.rank <= 3).sort((a, b) => a.rank > b.rank ? 1 : -1)

        return { articles }

    })

    app.get('/secondary', async (req, res) => {
        const articles = dataMainArticles.filter((article) => article.rank > 3).sort((a, b) => a.rank > b.rank ? 1 : -1)
        return { articles }
    })

    app.get('/:id', async (req, res) => {
        const getArticleParamsSchema = z.object({ id: z.string().uuid() })

        const { id } = getArticleParamsSchema.parse(req.params)

        const article = dataMainArticles.filter((article) => article.id === id)

        return article
    })
}