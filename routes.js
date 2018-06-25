const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("home", "/", "index");
routes.add("other", "/other-page", "other");
routes.add("another", "/another-page", "another");
routes.add("test", "/test-page", "test");
routes.add("alt", "/alt-page", "alt");
