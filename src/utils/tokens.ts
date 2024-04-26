import axios from 'axios';

import { baseURL } from '@/config/axiosCofig';

export const getTokens = async (data: any) => {
	try {
		const request = await axios.post(baseURL + '/token/', data);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		return Promise.reject(err.response.data);
	}
};

export const refreshTokens = async (data: any) => {
	try {
		const request = await axios.post(baseURL + '/token/refresh/', data);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		return Promise.reject(err.response.data);
	}
};
