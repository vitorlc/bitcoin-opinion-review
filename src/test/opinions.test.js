const axios = require('axios')
const crypto = require('crypto')
const config = require('../config')

const opinionService = require('../services/opinionService')

const generate = () => crypto.randomBytes(20).toString('hex')

const request = (url, method, data) => axios({ url, method, data })

test('Should get opinions', async () => {
  const opinion1 = await opinionService.saveOpinion({
    author: generate(),
    text: 'Beginning is easy, continuing is hard. -Japanese proverb on #Bitcoin',
    link: generate(),
    data: '2021-06-27'
  })

  const response = await request(`http://localhost:${config.port}/api/opinions/${opinion1.author}`, 'get')
  const opinions = response.data

  expect(opinions).toHaveProperty('opinion')
  expect(opinions).toHaveProperty('avg')

  await opinionService.deleteOpinion(opinion1.id)
})

test('Should save opinions', async () => {
  const data = {
    author: generate(),
    text: 'Beginning is easy, continuing is hard. -Japanese proverb on #Bitcoin',
    link: generate(),
    date: '2021-06-27'
  }

  const response = await request(`http://localhost:${config.port}/api/opinions`, 'post', data)
  const opinion = response.data

  expect(opinion.author).toBe(data.author)
  expect(opinion.text).toBe(data.text)
  expect(opinion.link).toBe(data.link)
  expect(opinion.date).toBe(data.date)

  await opinionService.deleteOpinion(opinion.id)
})
