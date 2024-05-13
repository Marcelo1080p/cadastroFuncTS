"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(rua, numero, bairro, cidade, uf, cep) {
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
exports.Endereco = Endereco;
