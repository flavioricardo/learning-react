import React, { Component } from 'react';
import InputCustomizado from '../Elementos/InputCustomizado';
import Botao from '../Elementos/Botao';
import ErrorHandler from '../../ultils/ErrorHandler';
import PubSub from 'pubsub-js';

class LivroFormulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo : '',
            preco : '',
            autorId : ''
        };

        this.submitForm = this.submitForm.bind(this);
		this.setTitulo = this.setTitulo.bind(this);
		this.setPreco = this.setPreco.bind(this);
		this.setAutorId = this.setAutorId.bind(this);
    }

    submitForm(event) {
		event.preventDefault();
		fetch('http://localhost:8080/api/livros', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				titulo: this.state.titulo,
				preco: this.state.preco,
				autorId: this.state.autorId
			})
		}).then(resultados => {
            if (resultados.status === 200) {
                resultados.json().then(dados => {
                    PubSub.publish('atualiza-lista-livros', dados);
                    this.setState({
                        titulo : '',
                        preco : '',
                        autorId : ''
                    })
                    PubSub.publish('clear-validation', {});
                })
            } else if (resultados.status === 400) {
                new ErrorHandler().showErrors(resultados);
            }
		}).catch(erro => {
            console.log(erro);
        });
    }

    setTitulo(event) {
		this.setState({titulo: event.target.value});
	}

	setPreco(event) {
		this.setState({preco: event.target.value});
	}

	setAutorId(event) {
		this.setState({autorId: event.target.value});
	}

    render() {
        return(
            <div className="row">
                <div className="col">
                    <form onSubmit={ this.submitForm }>
                        <InputCustomizado id="titulo" type="text" name="titulo" value={ this.state.titulo } onChange={ this.setTitulo } label="Título" />
                        <InputCustomizado id="preco" type="text" name="preco" value={ this.state.preco } onChange={ this.setPreco } label="Preço" />
                        <div className="form-group">
                            <label htmlFor="autorId">Autor</label>
                            <select id="autorId" name="autorId" className="custom-select" value={ this.state.autorId } onChange={ this.setAutorId }>
                                <option value="">Selecione o Autor</option>
                                {
                                    this.props.autores.map(function(autor) {
                                        return <option value={ autor.id }>{ autor.nome }</option>
                                    })
                                }
                            </select>
                        </div>
                        <Botao type="submit" label="Cadastrar" />
                    </form>
                </div>
            </div>
        );
    }

}

class LivroTabela extends Component {

    render() {
        return(
            <div className="row mt-4">
                <div className="col">
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>Título</th>
                                <th>Preço</th>
                                <th>Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.livros.map(function(livro, indice){
                                    return (
                                        <tr key={ indice }>
                                            <td>{ livro.titulo }</td>
                                            <td>{ livro.preco }</td>
                                            <td>{ livro.autor.nome }</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

class LivroBox extends Component {

    constructor(props) {
		super(props);
		this.state = {
            livros : [],
            autores : []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/autores').then(
			resultados => resultados.json().then(
				autores => this.setState({ autores })
			)
        )

		fetch('http://localhost:8080/api/livros').then(
			resultados => resultados.json().then(
				livros => this.setState({ livros })
			)
        )

        PubSub.subscribe('atualiza-lista-livros', function(topico, novaLista) {
            this.setState({ livros : novaLista })
        }.bind(this));
    }

    render() {
        return(
            <div className="container">
                <h2 className="mt-2">Cadastro de Livros</h2>
                <LivroFormulario autores={ this.state.autores } />
                <LivroTabela livros={ this.state.livros } />
            </div>
        );
    }

}

export default LivroBox;