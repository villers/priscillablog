import axios from 'axios';

const configureClient = (baseURL) => axios.create({
    baseURL,
    responseType: 'json',
});

export default configureClient;
