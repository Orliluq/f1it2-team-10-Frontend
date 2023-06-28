const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
