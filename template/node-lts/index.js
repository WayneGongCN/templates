"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handler = require("./function/handler");

// middlewares
app.use(bodyParser.json());

// handle all method
app.all("/*", handler);

// handle error
app.use(function (err, req, res, next) {
  if (res.headersSent) return next(err);
  else {
    const status = err.status || 500;
    const code = err.code || -1;
    const message = err.message || "";
    const stack = err.stack || "";
    return res.status(status).json({ code, message, stack });
  }
});

// listen port
const port = process.env.http_port || 3000;
app.listen(port, () => {
  console.log(`node-lts listening on port: ${port}`);
});
