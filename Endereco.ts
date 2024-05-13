import { Pessoa } from "./Pessoa.";

export class Endereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;

  constructor(
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string
  ) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cep = cep;
  }

  listarEndereco() {
    console.log(`Rua: ${this.rua}, número: ${this.numero}, bairro: ${this.bairro}
        cidade:${this.cidade}, uf: ${this.uf}, CEP: ${this.cep}`);
  }
}
