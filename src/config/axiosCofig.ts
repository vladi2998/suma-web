import { refreshTokens } from '@/utils/tokens';
import axios from 'axios';

export const baseURL = 'https://sumate-backend.fly.dev/api';

const axiosConfigInstance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
axiosConfigInstance.interceptors.request.use(
	(config) => {
		// Modify the request config here (add headers, authentication tokens)
		const accessToken = localStorage.getItem('accessToken');

		// If token is present add it to request's Authorization Header
		if (accessToken) {
			if (config.headers)
				config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		// Handle request errors here
		return Promise.reject(error);
	}
);
// End of Request interceptor

// Response interceptor
axiosConfigInstance.interceptors.response.use(
	(response) => {
		// Modify the response data here
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			console.log('Refreshing token');
			
			originalRequest._retry = true;
			const refreshToken = localStorage.getItem('refreshToken');
			const resp = await refreshTokens({ refresh: refreshToken });
			localStorage.setItem('accessToken', resp.access);
			return axiosConfigInstance(originalRequest);
		}
		return Promise.reject(error);
	}
);

// Reset headers on logout
export function clearAuthHeader() {
	delete axiosConfigInstance.defaults.headers.common['Authorization'];
}

export default axiosConfigInstance;
