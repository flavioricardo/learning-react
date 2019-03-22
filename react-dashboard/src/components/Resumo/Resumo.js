import React, { Component } from 'react';

class Resumo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultas : {
                consultas_30dias_anteriores : 0,
                consultas_30dias_posteriores : 0
            },
            faturamento : {
                anterior : {
                    valor : 0,
                    comparativo : 0
                },
                previsao : {
                    valor : 0,
                    comparativo : 0
                }
            }
        }
    }

    render() {
        <div>

        </div>
    }
}

export default Resumo;