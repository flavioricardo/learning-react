import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';

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
		}).then(function(resultados) {
			console.log(resultados.statusText);
		})
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
								<div className="form-group">
									<label htmlFor="nome">Nome</label>
									<input type="text" className="form-control" id="nome" placeholder="Nome" value={ this.state.nome } onChange={ this.setNome } />
								</div>
								<div className="form-group">
									<label htmlFor="email">E-mail</label>
									<input type="email" className="form-control" id="email" placeholder="E-mail" value={ this.state.email } onChange={ this.setEmail } />
								</div>
								<div className="form-group">
									<label htmlFor="senha">Senha</label>
									<input type="password" className="form-control" id="senha" placeholder="Senha" value={ this.state.senha } onChange={ this.setSenha } />
								</div>
								<button type="submit" className="btn btn-primary">Enviar</button>
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