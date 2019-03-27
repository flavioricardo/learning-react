import { URL_API } from './base';

export function consultarResumo() {
    return fetch(`${URL_API}/resumo`).then(
        // Transforma o retorno num JSON
        resultado => resultado.json()
    );
}