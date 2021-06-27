const opinionService = require('../services/opinionService')

module.exports = {
  async saveOpinion(req, res) {
    try {
      const { body } = req
      const created = await opinionService.saveOpinion(body)
      res.status(200).json(created)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: true, message: "Não foi possível salvar a opinião" })
    }
  },
  async getOpinion(req, res) {
    try {
      const { author } = req.params
      const opinion = await opinionService.getOpinion(author)
      res.status(200).json(opinion)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: true, message: "Não foi possível encontrar a opinião" })
    }
  }
}