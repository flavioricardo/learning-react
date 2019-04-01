import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import AutorBox from './components/Autor/Autor';

class App extends Component {

	render() {
		return (
			<div>
				<MenuSuperior />
				<AutorBox />
			</div>
		);
	}
}

export default App;