const db = require('../models')
const Opinions = db.opinions
const vader = require('vader-sentiment')

const analyzeTextPolarity = (text) => {
  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text)

  let opinion

  if (intensity.compound >= 0.05) opinion = 'positive'
  else if (intensity.compound > -0.05 && intensity.compound < 0.05) opinion = 'neutral'
  else if (intensity.compound <= -0.05) opinion = 'negative'

  return {
    opinion,
    avg: intensity.compound
  }
}

const saveOpinion = (data) => {
  const { opinion, avg } = analyzeTextPolarity(data.text)
  return Opinions.create({
    author: data.author,
    text: data.text,
    link: data.link,
    date: data.date,
    opinion,
    avg
  })
}

const getOpinion = (author) => Opinions.findOne({
  where: {
    author
  }
})

const deleteOpinion = (id) => Opinions.destroy({
  where: {
    id
  }
})

module.exports = {
  saveOpinion,
  getOpinion,
  deleteOpinion,
  analyzeTextPolarity
}
