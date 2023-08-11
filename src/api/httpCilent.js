import axios from 'axios'


export const httpClient = axios.create({
    baseURL: 'http://flems.github.io/test/api',
    timeout: 1000,
});

httpClient.interceptors.response.use((response) =>{
  return response.data;
}, (response) => response.status)