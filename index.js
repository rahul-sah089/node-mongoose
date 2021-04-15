const express = require("express");
const mongoose = require("mongoose");
const routes = require("./route");

mongoose
  .connect("mongodb://localhost:27017/rahuldb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use("/api", routes);
    app.listen(5000, () => {
      console.log("Server got started");
    });
  });
