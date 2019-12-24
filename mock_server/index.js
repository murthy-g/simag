const express = require('express')
const { pingRouter } = require('./api');
const { HeaderRouter } = require('./api');

const app = express()

app.use(pingRouter());
app.use(HeaderRouter());

app.listen(5000, () => {
  console.log('App listening in port 5000')
})
