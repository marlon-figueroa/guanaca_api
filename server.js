/**
 * @author Marlon E. Figueroa
 * @since 22/11/2021
 * 
 */

const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");
const docs = require('./docs');
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", rpcMethods);
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

const port = process.env.PORT || 3000;
server = app.listen(port, () => console.log(`Servidor corriendo sobre puerto ${port}`));
