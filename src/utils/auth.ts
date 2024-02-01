import axiosConfigInstance from '@/config/axiosCofig';
import { log } from 'console';

export const getUser = async (data) => {
	try {
		const request = await axiosConfigInstance.post('/api/token/', data);
		return request;
	} catch (err) {
		console.log('error: ', err);
	}
};
