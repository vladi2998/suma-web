import axiosConfigInstance from '@/config/axiosCofig';

export const createLearningPath = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/learning_paths/', data);
		if (request.status === 201) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error al crear la Ruta: ', err.response);
		return null;
	}
};

export const createStep = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/steps/', data);
		if (request.status === 201) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error al crear la Ruta: ', err.response);
		return null;
	}
};
