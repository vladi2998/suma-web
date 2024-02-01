import axios from 'axios';

const axiosConfigInstance = axios.create({
	baseURL: 'https://sumate-backend.fly.dev/api',
});

// Request interceptor
axiosConfigInstance.interceptors.request.use(
	(config) => {
		// Modify the request config here (add headers, authentication tokens)
		const accessToken = true;
		// If token is present add it to request's Authorization Header
		if (accessToken) {
			if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
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

export default axiosConfigInstance;
