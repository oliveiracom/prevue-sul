import { http } from './config';

export default {
    obterTodos: () => {
        return http.get('obter-todos')
    },

    obter: (id) => {
        return http.get('obter-id/' + id)
    },

    cadastrar: (cliente) => {
        return http.post('cadastrar', cliente)
    }

};