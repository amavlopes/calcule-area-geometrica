export abstract class FormaGeometrica {
  abstract calcularArea(): number;

  public mostrarLog() {
    console.log(
      `Foi criada uma Forma Geomética.\nResultado do cálculo da área da Forma Geomética: ${this.calcularArea()}. \n\n`
    );
  }
}
