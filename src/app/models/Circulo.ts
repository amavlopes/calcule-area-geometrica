import { FormaGeometrica } from "./FormaGeometrica";

export class Circulo extends FormaGeometrica {
  private _raio: number;

  constructor(raio: number) {
    super();

    this._raio = raio;
  }

  get raio(): number {
    return this._raio;
  }

  set raio(raio: number) {
    this._raio = raio;
  }

  calcularArea(): number {
    const area = Math.PI * this.raio ** 2;
    return area;
  }

  public mostrarLog() {
    console.log(
      `Foi criado um Círculo de raio ${
        this._raio
      }. \nResultado do cálculo da área do Círculo: ${this.calcularArea()}. \n\n`
    );
  }
}
