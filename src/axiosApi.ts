import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://silalievabegimay-daf2d-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;