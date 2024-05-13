"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const uuid_1 = require("uuid");
const Endereco_1 = require("./Endereco");
class Pessoa extends Endereco_1.Endereco {
    constructor(nome, idade, rua, numero, bairro, cidade, uf, cep) {
        super(rua, numero, bairro, cidade, uf, cep);
        this.id = (0, uuid_1.v4)();
        this.nome = nome;
        this.idade = idade;
    }
    getPessoa() {
        console.log(`ID: ${this.id} - Nome: ${this.nome}, idade: ${this.idade} anos`);
    }
}
exports.Pessoa = Pessoa;
