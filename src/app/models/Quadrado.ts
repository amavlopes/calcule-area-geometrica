import { FormaGeometrica } from "./FormaGeometrica";

export class Quadrado extends FormaGeometrica {
  private _lado: number;

  constructor(lado: number) {
    super();
    this._lado = lado;
  }

  get lado(): number {
    return this._lado;
  }

  set lado(lado: number) {
    this._lado = lado;
  }

  public calcularArea(): number {
    return Math.pow(this._lado, 2);
  }
}
