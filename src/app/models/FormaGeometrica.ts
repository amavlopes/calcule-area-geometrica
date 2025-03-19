export abstract class FormaGeometrica {
  public abstract calcularArea(): number;

  public mostrarLog(): void {
    console.log(
      `Foi criada uma ${
        FormaGeometrica.name
      }.\nResultado do cálculo da área da ${
        FormaGeometrica.name
      } é: ${this.calcularArea()}. \n\n`
    );
  }
}
