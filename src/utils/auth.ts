import axiosConfigInstance from '@/config/axiosCofig';

export const getUser = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/token/', data);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error loquesea: ', err.response);
		return null;
	}
};

export const registerStudent = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/register/student/', data);
		return request;
	} catch (err: any) {
		console.log('error: ', err.response);
		return Promise.reject(err.response.data);
	}
};

export const registerTeacher = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/register/teacher/', data);
		return request;
	} catch (err: any) {
		console.log('error: ', err);
		return Promise.reject(err.response.data);
	}
};
