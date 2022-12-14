/**
 * Created by salahaddin on 08/27/2022.
 */

const APP = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = new APP();
require("./config/express")(app);

function listen() {
  app.listen(PORT);
  routes(app);
  console.info(`Server is running at ${PORT}`)
}

listen();
