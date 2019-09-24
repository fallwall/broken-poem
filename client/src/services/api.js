import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL
})

export const getWords = async () => {
  const resp = await api.get('/parts');
  return resp.data;
}