import express from "express";

import routes from "./routes";
import Main from "./app/index";

class App {
  private _server;

  constructor() {
    this._server = express();

    this.middlewares();
    this.routes();

    this.init();
  }

  get server() {
    return this._server;
  }

  init() {
    Main.init();
  }

  middlewares(): void {
    this._server.use(express.json());
  }

  routes(): void {
    this._server.use(routes);
  }
}

export default new App().server;
