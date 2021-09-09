import React from 'react';
import Converter from '../../Components/Converter/Converter';
import Header from '../../Components/Header';
import * as Styles from './styles';

class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <Styles.Global />

                <Header />

                <Styles.ContainerParMoedas>
                    <Converter moedaANome="BRL" moedaBNome="USD"/>
                    <Converter moedaANome="USD" moedaBNome="BRL"/>
                </Styles.ContainerParMoedas>
                
                <Styles.ContainerParMoedas>
                    <Converter moedaANome="BRL" moedaBNome="EUR"/>
                    <Converter moedaANome="EUR" moedaBNome="BRL"/>
                </Styles.ContainerParMoedas>

                <Styles.ContainerParMoedas>
                    <Converter moedaANome="BRL" moedaBNome="BTC"/>
                    <Converter moedaANome="BTC" moedaBNome="BRL"/>
                </Styles.ContainerParMoedas>
            </>
        )
    }
}

export default Home;