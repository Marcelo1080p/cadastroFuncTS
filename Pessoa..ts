import { v4 as uuidv4 } from "uuid";
import { Endereco } from "./Endereco";

export class Pessoa extends Endereco {
  private id = uuidv4();
  nome: string;
  idade: number;
  constructor(
    nome: string,
    idade: number,
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string
  ) {
    super(rua, numero, bairro, cidade, uf, cep);
    this.nome = nome;
    this.idade = idade;
  }

  getPessoa() {
    console.log(
      `ID: ${this.id} - Nome: ${this.nome}, idade: ${this.idade} anos`
    );
  }
}
