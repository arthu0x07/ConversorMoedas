import React from 'react';
import Home from './Pages/Home'

class App extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <Home />
            </>
        );
    }
}

{/* Irá retornar as páginas que serão renderizadas pelo index. Assim, podemos fazer uma lógica para apresentar diversas páginas utilizando este arquivo "App.js" */}
{/* Deploy Testing */}

export default App;