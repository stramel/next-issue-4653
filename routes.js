const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("home", "/", "index");
routes.add("other", "/other-page", "other");
routes.add("another", "/another-page", "another");
