# Calcule a Área Geométrica

Projeto para validar conceitos sobre classes e orientação à objetos em **Typescript**, ministrado pelo professor Keven Leone da disciplina de **Linguagens e Ambientes para Programação de Software** da Pós-Graduação de **Engenharia de Software 2024.1** do Centro Universitário Frassinetti do Recife (**UniFAFIRE**).

O presente projeto permite realizar o **cálculo da área geométrica**, conforme forma geométrica instanciada, aplicando os conhecimentos relacionados ao **uso de classes, encapsulamento, herança, polimorfimo e código bem estruturado**, que foram os requisitos propostos para a avaliação da disciplina.

## 🚀 Rodando localmente

#### Clone o projeto

```bash
  git clone https://github.com/amavlopes/calcule-area-geometrica.git
```

#### Entre no diretório do projeto

```bash
  cd calcule-area-geometrica
```

#### Instale as dependências

```bash
  npm install
```

#### Inicie o servidor

```bash
  npm run start
```

## 📌 Uso/Exemplos

#### Para o cálculo das áreas geométricas, você deve utilizar o método estático _init_ da classe _Main.ts_ localizada em _src/app/index.ts_:

```javascript
class Main {
  static init(): void {
    // Insira o cálculo da área geométrica aqui
    const circulo = new Circulo(0.5);
    circulo.calcularArea();
    circulo.mostrarLog();
  }
}

export default Main;
```

#### O método estático _init_ da classe _Main_, por sua vez, é chamado ao instanciar a classe _App_ localizada em _src/_:

```javascript
class App {
  ...
  constructor() {
    ...
    this.init();
  }
  ...

  init() {
    Main.init();
  }
  ...
}

export default new App().server;

```

---

⌨️ com ❤️ por [Amanda Avelino](https://github.com/amavlopes) 😊
