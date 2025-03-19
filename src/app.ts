import express from "express";
import routes from "./routes";
import { Circulo } from "./app/models/Circulo";
import { Quadrado } from "./app/models/Quadrado";
import { Retangulo } from "./app/models/Retangulo";

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

    // Retângulo
    const retangulo = new Retangulo(10, 2);
    retangulo.calcularArea();
    retangulo.mostrarLog();
  }

  middlewares(): void {
    this._server.use(express.json());
  }

  routes(): void {
    this._server.use(routes);
  }
}

export default new App().server;
