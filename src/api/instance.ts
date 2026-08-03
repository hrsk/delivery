import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://juniorsbootcamp.ru/api/v1/',
});
