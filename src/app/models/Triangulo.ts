import { FormaGeometrica } from "./FormaGeometrica";

export class Triangulo extends FormaGeometrica {
  private _base: number;
  private _altura: number;

  constructor(base: number, altura: number) {
    super();

    this._base = base;
    this._altura = altura;
  }

  get base(): number {
    return this._base;
  }

  set base(base: number) {
    this._base = base;
  }

  get altura(): number {
    return this._altura;
  }

  set altura(altura: number) {
    this._altura = altura;
  }

  public calcularArea(): number {
    return (this._base * this._altura) / 2;
  }

  public mostrarLog(): void {
    console.log(
      `Foi criado um ${Triangulo.name} de base ${this._base} e altura ${
        this._altura
      }. \nResultado do cálculo da área do ${
        Triangulo.name
      } é: ${this.calcularArea()}. \n\n`
    );
  }
}
