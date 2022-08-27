/**
 * Created by Salahaddin on 08/27/2022.
 */

module.exports = (app) => {
  app.get("/", (req, res) => res.send("Deploy nodejs to Heroku!"));
};
