import axiosConfigInstance from '@/config/axiosCofig';

export const createJobOffer = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/job-offers/', data);
		if (request.status === 201) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error al crear la ofreta: ', err.response);
		return null;
	}
};