import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuSuperior extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">CDC Admin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/autores" className="nav-link">Autores</Link></li>
                        <li className="nav-item"><Link to="/livros" className="nav-link">Livros</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MenuSuperior;