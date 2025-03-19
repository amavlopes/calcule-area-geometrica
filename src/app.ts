import express from "express";
import routes from "./routes";

class App {
  private _server;

  constructor() {
    this._server = express();

    this.middlewares();
    this.routes();
  }

  get server() {
    return this._server;
  }

  middlewares() {
    this._server.use(express.json());
  }

  routes() {
    this._server.use(routes);
  }
}

export default new App().server;
