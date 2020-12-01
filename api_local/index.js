const express = require("express");
const getFile = require("./getJson");
const app = express();
const port = 3000;

const cors = require("cors");

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.get("/teste", (req, res) => {
  res.send(getFile("teste"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
