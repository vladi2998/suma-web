import { toast } from 'sonner';

export default function ErrorParser(
	errors: any,
	defaultErrorTitle?: string,
	defaultErrorDescription?: string
) {
	const totalErrors = Object.keys(errors?.response?.data).length;
	if (totalErrors > 1) {
		Object.keys(errors.response.data).forEach((key) => {
			toast.error(defaultErrorTitle, {
				description: `${key}: ${errors.response.data[key]}`,
			});
		});
	} else {
		toast.error(defaultErrorTitle, {
			description: `${
				errors.response.data.detail ??
				errors.response ??
				defaultErrorDescription
			}`,
		});
	}
}
