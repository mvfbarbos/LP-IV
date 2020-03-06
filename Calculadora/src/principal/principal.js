import React, { Component } from 'react';
import './principal.css'
import '../components/Button';
import Button from '../components/Button';
import Display from '../components/Display';


const estadoInicial = {
    valorExibido: '0',
    valores: [0, 0],
    operacao: null,
    atual: 0,
    limpaDisplay: false
};




export default class Principal extends Component {
    state = { ...estadoInicial };

    constructor(props) {
        super(props);
        this.adicionarDigito = this.adicionarDigito.bind(this);
        this.limpar = this.limpar.bind(this);
        this.realizarOperacao = this.realizarOperacao.bind(this);
    }
    limpar() {
        this.setState({ ...estadoInicial });
    }

    realizarOperacao(operacao) {
        if (this.state.atual === 0) {
            this.setState({ operacao: operacao, atual: 1, limpaDisplay: true })
        } else {
            const opCorrente = this.state.operacao;

            const valores = [...this.state.valores];

            switch (opCorrente) {
                case "+":
                    valores[0] = valores[0] + valores[1];
                    valores[1] = 0;
                    break;
                default:
                    break;
            }
            
            switch (opCorrente) {
                case "-":
                    valores[0] = valores[0] - valores[1];
                    valores[1] = 0;
                    break;
                default:
                    break;
            }
            
            switch (opCorrente) {
                case "*":
                    valores[0] = valores[0] * valores[1];
                    valores[1] = 0;
                    break;
                default:
                    break;
            }
            
            switch (opCorrente) {
                case "/":
                    valores[0] = valores[0] / valores[1];
                    valores[1] = 0;
                    break;
                default:
                    break;
            }

            this.setState({
                valorExibido: valores[0],
                valores:valores,
                limpaDisplay:true,                
                limpaDisplay: opCorrente === "=" ? null : opCorrente,
                atual: operacao === "=" ? 0 : 1,

            })
        }
    }

    adicionarDigito(n) {
        if (n === '.' && this.state.valorExibido.includes('.'))
            return;

        let valor = '';
        if (this.state.valorExibido !== "0" || n ===".") {
            valor = this.state.valorExibido;
        }
        valor = this.state.limpaDisplay ? "" : valor;
        valor += n;
        this.setState({ valorExibido: valor, limpaDisplay: false });

        if (n !== ".") {
            const valores = [...this.state.valores];
            valores[this.state.atual] = parseFloat(valor);
            this.setState({ valores: valores })
        }

    }

    render() {
        return (
            <div className='principal'>
                <Display valor={this.state.valorExibido} />
                <Button rotulo="AC" espaco click={this.limpar} />
                <Button rotulo="%" />
                <Button  rotulo="÷" click={this.realizarOperacao} laranja />
                <Button rotulo="7" click={this.adicionarDigito} />
                <Button rotulo="8" click={this.adicionarDigito} />
                <Button rotulo="9" click={this.adicionarDigito} />
                <Button rotulo="x" click={this.realizarOperacao} laranja />
                <Button rotulo="4" click={this.adicionarDigito} />
                <Button rotulo="5" click={this.adicionarDigito} />
                <Button rotulo="6" click={this.adicionarDigito} />
                <Button rotulo="-" click={this.realizarOperacao} laranja />
                <Button rotulo="1" click={this.adicionarDigito} />
                <Button rotulo="2" click={this.adicionarDigito} />
                <Button rotulo="3" click={this.adicionarDigito} />
                <Button rotulo="+" click={this.realizarOperacao} laranja />
                <Button rotulo="0" espaco click={this.adicionarDigito} />
                <Button rotulo="." click={this.adicionarDigito} />
                <Button rotulo="=" click={this.realizarOperacao} laranja />

            </div>
        );
    }
} 