const express = require('express');
const app = express();
const port = 7007;

app.get('/', (req, res) => {
  res.send('hola, wnuel');
})

app.listen(port, () => {
  console.log('Puerto |' + port);
})
