import React, { Component } from 'react';

class MenuSuperior extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="/consultas">Consultas</a></li>
                        <li className="nav-item"><a className="nav-link" href="/faturamento">Faturamento</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MenuSuperior;