const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3, () => {
  console.log('server is listening? on port 3');
});
