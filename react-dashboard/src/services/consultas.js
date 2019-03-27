import { URL_API } from './base';

export function listarConsultas() {
    return fetch(`${URL_API}/consultas`).then(
        // Transforma o retorno num JSON
        resultado => resultado.json()
    );
}