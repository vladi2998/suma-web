import axiosConfigInstance from '@/config/axiosCofig';

export const getStudent = async (id: number) => {
	try {
		const request = await axiosConfigInstance.get(`/students/${id}/`);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('Error getting info student: ', err.response);
		return null;
	}
};

export const getTeacher = async (id: number) => {
	try {
		const request = await axiosConfigInstance.get(`/teachers/${id}/`);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('Error getting teacher student: ', err.response);
		return null;
	}
};

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

export const updatePassword = async (data: any) => {
	try {
		const request = await axiosConfigInstance.put(
			`/profile/change-password/`,
			data
		);
		if (request.status === 200) {
			return request.data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log('error updating password: ', err.response);
		return null;
	}
};

export async function addUserImage(userId: number, imageFile: File) {
  const formData = new FormData();
  formData.append('user', userId.toString());
  formData.append('image', imageFile);

  const response = await axiosConfigInstance.post(`user-images/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}
