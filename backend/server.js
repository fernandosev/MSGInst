const express = require("express");
const routes = require("./src/routes");
require("dotenv").config();
const http = require("http");
const app = express();
const server = http.Server(app);

app.use(express.json());

app.use(routes);

const port = process.env.SERVER_PORT;

server.listen(port, function () {
  console.log(`Server started Successfully on port ${port}`);
});
