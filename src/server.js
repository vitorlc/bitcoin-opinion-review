const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan('short'));
app.use(express.json());
app.use(config.api.prefix, routes);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
    return
  }
  console.log(`Server listening on port: ${config.port}`)
});