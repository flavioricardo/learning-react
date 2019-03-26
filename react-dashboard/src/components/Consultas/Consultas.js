import React, { Component } from 'react';

class Consultas extends Component {
    // Cria modelo igual ao retorno da API
    constructor(props) {
        super(props);
        this.state = {
            realizadas : [],
            marcadas : []
        }
    }

    componentDidMount() {
        // Roda assim que o componente for carregado, antes do render()
        fetch('http://www.devup.com.br/php/api-dashboard/api/consultas').then(
            // Transforma o retorno num JSON
            resultado => resultado.json().then(
                dados => this.setState(dados)
            )
        );
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-2">Consultas</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2">
                            <div className="card-header border-bottom-0">Realizadas</div>
                        </div>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // Percorre todos os itens do Array (item e indice)
                                    this.state.realizadas.map((item, indice) => {
                                        return (
                                            <tr key={ indice }>
                                                <td>{ item.especialidade }</td>
                                                <td>{ item.quantidade }</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <div className="card mt-2 mb-2">
                            <div className="card-header border-bottom-0">Marcadas</div>
                        </div>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // Percorre todos os itens do Array (item e indice)
                                    this.state.marcadas.map((item, indice) => {
                                        return (
                                            <tr key={ indice }>
                                                <td>{ item.especialidade }</td>
                                                <td>{ item.quantidade }</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

// Exporta o componente
export default Consultas;