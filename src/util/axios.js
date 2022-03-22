import axios from 'axios'

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = 'https://picsum.photos'

export default axiosInstance