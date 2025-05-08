const apiUrl = 'https://nettuts.hu/jms/kovikaze/';

export const getAll = (entity = 'product') => {
    return fetch(`${apiUrl}${entity}`)
        .then( response => response.json() );
};
export const remove = (id = 0, entity = 'product') => {
    return fetch(`${apiUrl}${entity}/${id}`, {
        methold: 'DELETE',
    })
    .then( response => response.json() );
};