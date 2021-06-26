
module.exports = {
  async saveOpinion(req, res) {
    try {
      res.status(200).json(product)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: true, message: "Não foi possível salvar a opinião" })
    }
  },
  async getOpinion(req, res) {
    try {
      res.status(200).json(data)
    } catch (e) {
      console.log(e)
      res.status(500).json({ error: true, message: "Não foi possível encontrar a opinião" })
    }
  }
}