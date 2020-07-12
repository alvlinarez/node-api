const express = require('express');

const config = require('./config/env');

const app = express();

app.listen({ port: config.port }, () => {
  console.log(`Server running on port ${config.port}`);
});
