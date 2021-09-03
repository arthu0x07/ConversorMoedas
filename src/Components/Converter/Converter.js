import React, { useState } from 'react';

class Converter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            moedaANome: this.props.moedaANome,
            moedaBNome: this.props.moedaBNome,
            moedaAValor: "",
            moedaBValor: ""
        }

        this.ConverterMoedas = this.ConverterMoedas.bind(this);
    }

    ConverterMoedas(event) {
        this.setState({
            moedaBValor: this.state.moedaAValor * 5
        })
    }

    render(){
        return(
            <>
                {/* Pega a propriedade State Nome da moeda */}
                <h1> {this.state.moedaANome} </h1>

                {/* Sempre que for alterada, chama uma função que altera o valor da moeda no state, pelo valor que está no input. Feito o Event do input */}
                <input type="text" placeholder="Valor" onChange={(event) => this.setState({moedaAValor: event.target.value})} />

                {/* Irá fazer o resto do Trabalho de Converter */}
                <input type="button" value="Converter" onClick={this.ConverterMoedas}/>

                <h2>Valor convertido em {this.state.moedaBNome}: {this.state.moedaBValor}</h2>
            </>
        )
    }
}

export default Converter;