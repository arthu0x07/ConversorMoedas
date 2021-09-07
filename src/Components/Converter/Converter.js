import React, { useState } from 'react';
const request = new XMLHttpRequest();

var oi = oi;

class Converter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            moedaANome: this.props.moedaANome,
            moedaBNome: this.props.moedaBNome,
            moedaAValor: null,
            moedaBValor: null,
            moedaCotacaoAB: null,
        }

        this.Request = this.Request.bind(this);
        this.atualizarcotacao = this.atualizarcotacao.bind(this);

    }

    /* Função Responsável por fazer as requisições e atualizar as cotações. */
    Request(event) {
            let endpoint = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`;
            request.open('GET', endpoint);
            request.send();

            request.onreadystatechange = () =>{
                if(request.readyState == 4 && request.status == 200){
                    var data = JSON.parse(request.responseText);
                    this.atualizarcotacao(data);
                } 
            }
        }

        atualizarcotacao(data, moedaprincipal = this.state.moedaANome, moedasecundaria = this.state.moedaBNome){
            switch (moedaprincipal) {
                case "USD":
                    this.setState({moedaCotacaoAB: data.USDBRL.high})
                    this.setState({moedaBValor: this.state.moedaAValor * this.state.moedaCotacaoAB})       
                    break;
                case "BTC":
                    this.setState({moedaCotacaoAB: data.BTCBRL.high})
                    this.setState({moedaBValor: this.state.moedaAValor * this.state.moedaCotacaoAB})
                    break;
                case "EUR":
                    this.setState({moedaCotacaoAB: data.EURBRL.high})
                    this.setState({moedaBValor: this.state.moedaAValor * this.state.moedaCotacaoAB})
                    break;
                
                case "BRL":
                    if(moedasecundaria == "USD"){
                        this.setState({moedaCotacaoAB: data.USDBRL.high})
                        this.setState({moedaBValor: this.state.moedaAValor / this.state.moedaCotacaoAB})    
                        break;    
                    } else 
                    
                    if(moedasecundaria == "BTC"){
                        this.setState({moedaCotacaoAB: data.BTCBRL.high})
                        this.setState({moedaBValor: this.state.moedaAValor / this.state.moedaCotacaoAB})
                    }else
                    
                    if(moedasecundaria == "EUR"){
                        this.setState({moedaCotacaoAB: data.EURBRL.high})
                        this.setState({moedaBValor: this.state.moedaAValor / this.state.moedaCotacaoAB})
                    }
            }
    }

    render(){
        return(
            <>
                {/* Pega a propriedade State Nome da moeda */}
                <h1> {this.state.moedaANome} </h1>

                {/* Sempre que for alterada, chama uma função que altera o valor da moeda no state, pelo valor que está no input. Feito o Event do input */}
                <input type="text" placeholder="Valor" onChange={(event) => this.setState({moedaAValor: event.target.value})} />

                {/* Irá fazer o resto do Trabalho de Converter */}
                <input type="button" value="Converter" onClick={this.Request}/>

                <h2>Valor convertido em {this.state.moedaBNome}: {this.state.moedaBValor}</h2>
            </>
        )
    }
}

export default Converter;