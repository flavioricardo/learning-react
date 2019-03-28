import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista : []
		};
	}

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

	render() {
		return (
			<div>
				<MenuSuperior />
				<div className="container">
					<h2 className="mt-2">Cadastro de Autores</h2>
					<div className="row">
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