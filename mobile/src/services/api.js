import axios from 'axios';
import {Platform} from 'react-native';
import {API_BASE_URL} from '@env';

export const {CancelToken, isCancel} = axios;

const api = axios.create({
  baseURL: Platform.OS === 'ios' ? API_BASE_URL : 'http://10.0.2.2:3333',
});

export default api;
