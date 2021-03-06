const dotenv = require('dotenv')

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("Couldn't find .env file")
}
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

module.exports = {

  port: parseInt(PORT),
  api: {
    prefix: '/api'
  },
  db: {
    development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT || 'mysql',
      port: process.env.DB_PORT
    },
    test: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT || 'mysql',
      port: process.env.DB_PORT
    }
  },
  env: {
    NODE_ENV: process.env.NODE_ENV
  }
}
