import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Autor from './components/Autor/Autor';
import Livro from './components/Livro/Livro';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<div>
				<MenuSuperior />
				<Switch>
					{/* <Route path="/" extact component={} /> */}
					<Route path="/autores" component={Autor} />
					<Route path="/livros" component={Livro} />
				</Switch>
			</div>
		);
	}
}

export default App;