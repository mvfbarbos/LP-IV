import React, { Component } from "react";
import "./principal.css";

import Button from '../components/Button';
import Display from "../components/Display";

const estadoInicial = {
    valorExibido: "0"
}

export default class Principal extends Component {

    state = { ...estadoInicial };

    constructor(props) {
        super(props);
        this.adicionarDigito = this.adicionarDigito.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    limpar() {
        this.setState({...estadoInicial});
    }

    adicionarDigito(n) {
        if (n === "." && this.state.valorExibido.includes("."))
            return;

        let valor = "";
        if (this.state.valorExibido !== "0") {
            valor = this.state.valorExibido;

        }

        valor += n;
        this.setState({ valorExibido: valor });


    }


    render() {
        return (
            <div className="principal">
                <Display valor={this.state.valorExibido} />
                <Button rotulo="AC" espaco click={this.limpar} />
                <Button rotulo="%" />
                <Button rotulo="/" laranja />
                <Button rotulo="7" click={this.adicionarDigito} />
                <Button rotulo="8" click={this.adicionarDigito} />
                <Button rotulo="9" click={this.adicionarDigito} />
                <Button rotulo="*" laranja />
                <Button rotulo="4" click={this.adicionarDigito} />
                <Button rotulo="5" click={this.adicionarDigito} />
                <Button rotulo="6" click={this.adicionarDigito} />
                <Button rotulo="-" laranja />
                <Button rotulo="1" click={this.adicionarDigito} />
                <Button rotulo="2" click={this.adicionarDigito} />
                <Button rotulo="3" click={this.adicionarDigito} />
                <Button rotulo="+" laranja />
                <Button rotulo="0" espaco click={this.adicionarDigito} />
                <Button rotulo="." click={this.adicionarDigito} />
                <Button rotulo="=" laranja />


            </div>
        )
    }
}
