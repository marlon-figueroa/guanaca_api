const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", rpcMethods);

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Moda Guanaca API with Swagger",
        version: "0.0.1",
        description:
          "Documentación con Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Moda Guanaca - Comercio Eléctronico 2021",
          url: "https://modaguanaca.com",
          email: "marlon.f.993@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/modaguanaca",
        },
      ],
    },
    apis: ["./routes/api.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

const port = process.env.PORT || 3000;
server = app.listen(port, () => console.log(`Servidor corriendo sobre puerto ${port}`));
