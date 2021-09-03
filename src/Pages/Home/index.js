import React from 'react';
import Converter from '../../Components/Converter/Converter';

class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <Converter moedaANome="BRL" moedaBNome="USD"/>
                <Converter moedaANome="USD" moedaBNome="BRL"/>
            </>
        )
    }
}

export default Home;