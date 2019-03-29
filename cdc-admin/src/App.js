import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import InputCustomizado from './components/Elementos/InputCustomizado';
import Botao from './components/Elementos/Botao';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista : [],
			nome : '',
			email : '',
			senha : ''
		};
		// Associa o this do método submitForm ao this do React
		this.submitForm = this.submitForm.bind(this);
		// O mesmo para demais funções
		this.setNome = this.setNome.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setSenha = this.setSenha.bind(this);
	}

	// Função só é chamada depois da primeira renderização
	componentDidMount() {
		fetch('http://localhost:8080/api/autores').then(
			resultados => resultados.json().then(
				lista => this.setState({ lista })
			)
		)

		// Consulta à API usando Ajax do jQuery
		// $.ajax({
		// 	url : 'http://localhost:8080/api/autores',
		// 	dataType : 'json',
		// 	success : function(resultados) {
		// 		this.setState({ lista: resultados });
		// 	}.bind(this)
		// });
	}

	submitForm(event) {
		event.preventDefault();
		fetch('http://localhost:8080/api/autores', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: this.state.nome,
				email: this.state.email,
				senha: this.state.senha
			})
		}).then(resultados => {
			resultados.json().then(dados => {
				this.setState({ lista : dados })
			})
		})
	}

	setNome(event) {
		this.setState({nome: event.target.value});
	}

	setEmail(event) {
		this.setState({email: event.target.value});
	}

	setSenha(event) {
		this.setState({senha: event.target.value});
	}

	render() {
		return (
			<div>
				<MenuSuperior />
				<div className="container">
					<h2 className="mt-2">Cadastro de Autores</h2>
					<div className="row">
						<div className="col">
							<form onSubmit={ this.submitForm }>
								<InputCustomizado id="nome" type="text" name="nome" value={ this.state.nome } onChange={ this.setNome } label="Nome" />
								<InputCustomizado id="email" type="email" name="email" value={ this.state.email } onChange={ this.setEmail } label="E-mail" />
								<InputCustomizado id="senha" type="password" name="senha" value={ this.state.senha } onChange={ this.setSenha } label="Senha" />
								<Botao type="submit" label="Cadastrar" />
							</form>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col">
							<table className="table table-bordered">
								<thead className="thead-light">
									<tr>
										<th>Nome</th>
										<th>E-mail</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.lista.map(function(autor, indice){
											return (
												<tr key={ indice }>
													<td>{ autor.nome }</td>
													<td>{ autor.email }</td>
												</tr>
											);
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;