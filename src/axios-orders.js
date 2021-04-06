import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-effe2-default-rtdb.firebaseio.com/'
});

export default instance;