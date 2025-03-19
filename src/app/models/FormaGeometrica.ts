export abstract class FormaGeometrica {
  public abstract calcularArea(): number;

  public mostrarLog(): void {
    console.log(
      `Foi criada uma Forma Geomética.\nResultado do cálculo da área da Forma Geomética é: ${this.calcularArea()}. \n\n`
    );
  }
}
