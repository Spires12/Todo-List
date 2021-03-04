const express = require('express');
const routers = require('./routers/index');

function init() {
  const app = express();

  app.listen(3000, function () {
    console.log('runner port 3000')
  })
  routers(app)

}

init()