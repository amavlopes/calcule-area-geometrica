import express from "express";
import routes from "./routes";
import { Circulo } from "./app/models/Circulo";
import { Quadrado } from "./app/models/Quadrado";
import { Retangulo } from "./app/models/Retangulo";
import { Triangulo } from "./app/models/Triangulo";

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
    // Circulo
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

    // Retangulo
    const retangulo = new Retangulo(10, 2);
    retangulo.calcularArea();
    retangulo.mostrarLog();

    // Triangulo
    const triangulo = new Triangulo(20, 4);
    triangulo.calcularArea();
    triangulo.mostrarLog();

    triangulo.base = 10;
    triangulo.altura = 5;
    triangulo.calcularArea();
    triangulo.mostrarLog();
  }

  middlewares(): void {
    this._server.use(express.json());
  }

  routes(): void {
    this._server.use(routes);
  }
}

export default new App().server;
