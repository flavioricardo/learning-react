import React, { Component } from 'react';

class Botao extends Component {

    render() {
        return(
            <button type={ this.props.type } className="btn btn-primary">{ this.props.label }</button>
        )
    }

}

export default Botao;