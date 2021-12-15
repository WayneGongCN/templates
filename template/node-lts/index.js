"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handler = require("./function/handler");

// middlewares
app.use(bodyParser.json());


// handler all method
app.all("/*", handler);


// listen port
const port = process.env.http_port || 3000;
app.listen(port, () => {
  console.log(`node-lts listening on port: ${port}`);
});
