import axiosConfigInstance from '@/config/axiosCofig';

export const updateStudent = async (data: any, id: number) => {
	try {
		const request = await axiosConfigInstance.patch(`/students/${id}/`, data);
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

export const updateTeacher = async (data: any, id: number) => {
	try {
		const request = await axiosConfigInstance.patch(`/teachers/${id}/`, data);
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

export const getProfileData = async () => {
	try {
		const request = await axiosConfigInstance.get(`/profile/`);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error getting profile values: ', err.response);
		return null;
	}
};
