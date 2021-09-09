import React, { useState } from 'react';
import * as Styles from './styles';
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
            <Styles.ContainerContainerConversor>
                <Styles.ContainerConversor>
                
                <div>
                    {/* Pega a propriedade State Nome da moeda */}
                    <Styles.TitleConversor > {this.state.moedaANome} </Styles.TitleConversor>
                    {/* Sempre que for alterada, chama uma função que altera o valor da moeda no state, pelo valor que está no input. Feito o Event do input */}
                    <Styles.InputConversor type="text" placeholder="Valor" onChange={(event) => this.setState({moedaAValor: event.target.value})} />
                    {/* Irá fazer o resto do Trabalho de Converter */}
                    <Styles.ButtonConversor type="button" value="Converter" onClick={this.Request}>Converter</Styles.ButtonConversor>
                </div>

                    <Styles.TitleConversor2>Valor convertido em {this.state.moedaBNome}: {this.state.moedaBValor}</Styles.TitleConversor2>
                
                </Styles.ContainerConversor>
            </Styles.ContainerContainerConversor>
        )
    }
}

export default Converter;