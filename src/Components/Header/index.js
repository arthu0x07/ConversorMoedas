import React from "react";
import Links from "../Links/index";

import * as Styles from './styles';

class Header extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Styles.HeaderDiv>
                <h1>Conversor ONLINE :D</h1>
            </Styles.HeaderDiv>
        )
    }
}

export default Header;