import React from "react";
import * as Styles from './styles';

class Links extends React.Component{
    render(){
        return(
            <Styles.Links href={this.props.href}> {this.props.children} </Styles.Links>
        )
    }
}

export default Links;