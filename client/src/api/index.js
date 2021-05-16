import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5000/api'
});

export const fetchSurls = () => api.get(`/surls`);
export const createSurl = (payload) => api.post(`/surl`, payload);
