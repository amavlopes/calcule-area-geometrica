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

  public calcularArea(): number {
    return Math.PI * this._raio ** 2;
  }

  public mostrarLog(): void {
    console.log(
      `Foi criado um Círculo de raio ${
        this._raio
      }. \nResultado do cálculo da área do Círculo é: ${this.calcularArea()}. \n\n`
    );
  }
}
