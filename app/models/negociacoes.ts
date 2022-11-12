import { Negociacao } from './negociacao.js';
export class Negociacoes {

    private negociacoes : Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }

}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n =>{
    n.

})0

