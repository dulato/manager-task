import axios from 'axios';
import { API_BASE_URL } from '@/config/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const useFetcher = {
    get: <T = any>(url: string, config = {}) => api.get<T>(url, config),
    post: <T = any>(url: string, data?: any, config = {}) => api.post<T>(url, data, config),
    put: <T = any>(url: string, data?: any, config = {}) => api.put<T>(url, data, config),
    delete: <T = any>(url: string, config = {}) => api.delete<T>(url, config)
};
