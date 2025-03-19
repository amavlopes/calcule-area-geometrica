import express from "express";
import routes from "./routes";
import { FormaGeometrica } from "./app/models/FormaGeometrica";
import { Circulo } from "./app/models/Circulo";
import { Quadrado } from "./app/models/Quadrado";

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

  init(): void {
    // Círculo
    const circulo = new Circulo(0.5);
    circulo.calcularArea();
    circulo.mostrarLog();

    circulo.raio = 3;
    circulo.calcularArea();
    circulo.mostrarLog();

    // Quadrado
    const quadrado = new Quadrado(2);
    quadrado.calcularArea();
    quadrado.mostrarLog();
  }

  middlewares(): void {
    this._server.use(express.json());
  }

  routes(): void {
    this._server.use(routes);
  }
}

export default new App().server;
