import { toast } from 'sonner';

export default function ErrorParser(
	errors: any,
	defaultErrorTitle?: string,
	defaultErrorDescription?: string
) {
	const totalErrors = Object.keys(errors?.response?.data).length;
	if (totalErrors) {
		Object.keys(errors.response.data).forEach((key) => {
			if (errors.response.data?.[key]?.length > 0) {
				errors.response.data[key].forEach((error: any) => {
					if (!error) return;
					const totalSubErrors = Object.keys(error).length;
					if (totalSubErrors) {
						Object.keys(error).forEach((key) => {
							toast.error(defaultErrorTitle, {
								description: `${key}: ${
									error[key]?.length > 0 ? error[key]?.[0] : error[key]
								}`,
							});
						});
					} else {
						toast.error(defaultErrorTitle, {
							description: `${key}: ${error}`,
						});
					}
				});
			} else {
				toast.error(defaultErrorTitle, {
					description: `${key}: ${errors.response.data[key]}`,
				});
			}
		});
	} else {
		toast.error(defaultErrorTitle, {
			description: defaultErrorDescription,
		});
	}
}
