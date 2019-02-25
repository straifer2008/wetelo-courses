import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3333';

// const apiPost = async (url, data) => await axios.post(`${apiUrl}${url}`, data);
const apiPost = async (url, data) => await axios.post(`${url}`, data);

const apiGet = async (url) => await axios.get(`${apiUrl}${url}`);

export {
    apiPost,
    apiGet
}