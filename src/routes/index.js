const { Router } = require('express')
const routes = Router()

const opinionController = require('../controllers/opinionController')

routes.get('/status', (req, res) => res.status(200).end())
routes.head('/status', (req, res) => res.status(200).end())

// Opinions
routes.post('/opinions', opinionController.saveOpinion)
routes.get('/opinions/:author', opinionController.getOpinion)

module.exports = routes
