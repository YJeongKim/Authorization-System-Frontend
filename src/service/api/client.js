import axios from 'axios';

export const client = axios.create();

// todo : api 기본 url
client.defaults.baseURL = `http://localhost:8000/api/`;

axios.defaults.withCredentials = true;