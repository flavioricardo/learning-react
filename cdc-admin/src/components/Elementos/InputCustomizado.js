import React, { Component } from 'react';

class InputCustomizado extends Component {

    render() {
        return(
            <div className="form-group">
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <input type={ this.props.type } className="form-control" id={ this.props.id } name={ this.props.nome } placeholder={ this.props.label } value={ this.props.value } onChange={ this.props.onChange } />
            </div>
        )
    }

}

export default InputCustomizado;