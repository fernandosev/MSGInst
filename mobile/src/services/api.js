import axios from 'axios';
import {Platform} from 'react-native';
import {API_BASE_URL} from '@env';

export const {CancelToken, isCancel} = axios;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
