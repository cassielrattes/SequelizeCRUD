const { Router } = require("express");
const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const AgendaController = require("./app/controllers/AgendaController");

const routes = Router();

// UserController \\
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

// SessionController \\
routes.post("/sessions", SessionController.store);

// AgendaController \\
routes.get("/agendas", AgendaController.index);
routes.post("/agendas", AgendaController.store);
// routes.put("/users/:id", AgendaController.update);
routes.delete("/agendas/:id", AgendaController.destroy);

module.exports = routes;
