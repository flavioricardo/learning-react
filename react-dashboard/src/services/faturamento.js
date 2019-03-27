import { URL_API } from './base';

export function consultarFaturamento() {
    return fetch(`${URL_API}/faturamento`).then(
        // Transforma o retorno num JSON
        resultado => resultado.json()
    );
}