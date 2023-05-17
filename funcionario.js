class Pessoa {

    constructor(nome) {
    this.nome = nome;
    }
    dizOi() {
        console.log(this.nome + " diz olá");   
    }
    dizCargo() {
    console.log(this.cargo);
    }
}
    class Funcionario extends Pessoa {
    constructor(nome, cargo, salario) {
    super(nome);
    this.cargo = cargo;
    this.salario = salario;

    }
    aumento() {
     const novoSalario = this.salario * 1.1;
    this.salario = novoSalario;
    }
    dizCargo() {
    console.log(this.cargo);
    }
}
class Estagiario extends Funcionario {
    constructor(nome) {
    super(nome, "Estagiário", 2000);
    }
    aumento() {
     const novoSalario = this.salario * 1.07;
    this.salario = novoSalario;
    }
}
    class Gerente extends Funcionario {
    constructor(nome) {
    super(nome, "Gerente", 10000);
    }
    aumento() {
     const novoSalario = this.salario * 1.15;
    this.salario = novoSalario;

    }
}

    const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
    const funcionario2 = new Estagiario("Pedro");
    const funcionario3 = new Gerente("Paula");

    funcionario1.aumento();
    console.log(funcionario1.salario);

    funcionario2.aumento();
    console.log(funcionario2.salario);

    funcionario3.aumento();
    console.log(funcionario3.salario);