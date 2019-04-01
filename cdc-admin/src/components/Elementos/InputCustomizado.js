import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class InputCustomizado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validation : ''
        }
    }

    componentDidMount() {
        PubSub.subscribe('validation', function(topico, error) {
            if (error.field === this.props.name) {
                this.setState({ validation : error })
            }
        }.bind(this));
    }

    render() {
        return(
            <div className="form-group">
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <input type={ this.props.type } className="form-control" id={ this.props.id } name={ this.props.nome } placeholder={ this.props.label } value={ this.props.value } onChange={ this.props.onChange } />
                <small className="form-text text-danger">{ this.state.validation.defaultMessage }</small>
            </div>
        )
    }

}

export default InputCustomizado;