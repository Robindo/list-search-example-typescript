import { Details } from '../types/Details';

export const getApiDetails = (query: string): Promise<Details[]> =>
  fetch(`http://localhost:8081/genres?q=${query}`).then(response =>
    !query || query === '' ? [] : response.json()
  );

export const getApiDetailsById = (id: string): Promise<object> =>
  fetch(`http://localhost:8081/genres?id=${id}`).then(response =>
    response.json()
  );

export const postApiDetails = (data: object): Promise<object> =>
  fetch(`http://localhost:8081/genres`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());

export const deleteApiDetailsById = (id: string): Promise<object> =>
  fetch(`http://localhost:8081/genres/${id}`, {
    method: 'delete'
  }).then(response => response.json());
