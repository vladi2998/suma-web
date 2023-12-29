import axiosConfigInstance from '@/config/axiosCofig';

export const getUser = async () => {
	try {
		const data = await axiosConfigInstance.get('/api/users/random_user');
		console.log('data', data);
		return data;
	} catch (err) {
		console.log('error: ', err);
	}
};
