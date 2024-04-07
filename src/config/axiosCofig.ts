import axios from 'axios';

const axiosConfigInstance = axios.create({
	baseURL: 'https://sumate-backend.fly.dev/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
axiosConfigInstance.interceptors.request.use(
	(config) => {
		// Modify the request config here (add headers, authentication tokens)
		const accessToken = localStorage.getItem('accessToken');
		const refreshToken = localStorage.getItem('refreshToken');

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
	(error) => {
		// Handle response errors here
		return Promise.reject(error);
	}
);

// Reset headers on logout
export function clearAuthHeader() {
	delete axiosConfigInstance.defaults.headers.common['Authorization'];
}

export default axiosConfigInstance;
