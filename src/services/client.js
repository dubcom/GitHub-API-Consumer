import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users'
});
const apiUserList= axios.create({
    baseURL: 'https://api.github.com/search'
});
export {apiUserList, api};