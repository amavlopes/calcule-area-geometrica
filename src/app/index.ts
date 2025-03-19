import { Circulo } from "./models/Circulo";
import { Quadrado } from "./models/Quadrado";
import { Retangulo } from "./models/Retangulo";
import { Triangulo } from "./models/Triangulo";

class Main {
  static init(): void {
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
}

export default Main;
