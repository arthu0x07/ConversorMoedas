import React from 'react';
import Converter from '../../Components/Converter/Converter';

class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <Converter moedaANome="USD" moedaBNome="BRL"/>
                <Converter moedaANome="BRL" moedaBNome="USD"/>
                
                <Converter moedaANome="EUR" moedaBNome="BRL"/>
                <Converter moedaANome="BRL" moedaBNome="EUR"/>

                <Converter moedaANome="BTC" moedaBNome="BRL"/>
                <Converter moedaANome="BRL" moedaBNome="BTC"/>

            </>
        )
    }
}

export default Home;