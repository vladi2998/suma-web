import axiosConfigInstance from '@/config/axiosCofig';
import { log } from 'console';

export const getUser = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/token/', data);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err) {
		console.log('error: ', err);
		return null;
	}
};

export const registerUndergraduateStudent = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post(
			'/register/undergraduate_student/',
			data
		);
		return request;
	} catch (err) {
		console.log('error: ', err);
	}
};

export const registerPostGraduateStudent = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post(
			'/register/postgraduate_student/',
			data
		);
		return request;
	} catch (err) {
		console.log('error: ', err);
	}
};

export const registerTeacher = async (data: any) => {
	try {
		const request = await axiosConfigInstance.post('/register/teacher/', data);
		return request;
	} catch (err) {
		console.log('error: ', err);
	}
};
