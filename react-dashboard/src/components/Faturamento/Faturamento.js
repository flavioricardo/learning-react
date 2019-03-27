import React, { Component } from 'react';
import { consultarFaturamento } from '../../services/faturamento';

class Faturamento extends Component {
    // Cria modelo igual ao retorno da API
    constructor(props) {
        super(props);
        this.state = {
            detalhamento : []
        }
    }

    componentDidMount() {
        // Roda assim que o componente for carregado, antes do render()
        consultarFaturamento().then(
            dados => this.setState(dados)
        );
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-2">Faturamento</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2 mb-2">
                            <div className="card-header border-bottom-0">Total por forma de pagamento</div>
                        </div>
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>Descrição</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // Percorre todos os itens do Array (item e indice)
                                    this.state.detalhamento.map((item, indice) => {
                                        return (
                                            <tr key={ indice }>
                                                <td>{ item.descricao }</td>
                                                <td className="text-right">
                                                    { item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }
                                                </td>
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
export default Faturamento;