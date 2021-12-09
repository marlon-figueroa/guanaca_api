const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", rpcMethods);

const port = process.env.PORT || 3000;

server = app.listen(port, () => console.log(`Servidor corriendo sobre puerto ${port}`));