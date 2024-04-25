import axiosConfigInstance from '@/config/axiosCofig';
import { ItemValue } from '@/components/forms/inputSelect';

export async function getPregraduatesCareers() {
	try {
		const response = await axiosConfigInstance.get('programs/undergraduate/');
		const data: ItemValue[] = response.data.map((item: any) => ({
			value: item.id,
			label: item.name,
		}));
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function getPostgraduatesCareers() {
	try {
		const response = await axiosConfigInstance.get('programs/postgraduate/');
		const data: ItemValue[] = response.data.map((item: any) => ({
			value: item.id,
			label: item.name,
		}));
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
}
