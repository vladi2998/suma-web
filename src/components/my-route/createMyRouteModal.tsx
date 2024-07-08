'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useForm } from 'react-hook-form';
import plusIcon from '../../../public/PNG/plus-icon.png';
import Image from 'next/image';
import InputField from '../forms/inputField';
import ForwardButton from '../buttons/forwardButton';
import {
	createLearningPath,
	createStep,
	deleteStep,
	updateLearningPath,
} from '@/utils/learning_paths';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import ErrorParser from '@/utils/errorParser';
import { RouteType } from './RouteComponent';
import SelectField from '../forms/inputSelect';

type FormFields = {
	title: string;
	description: string;
	step_1_title: string;
	step_1_description: string;
	step_1_url: string;
	step_1_file: string;
	step_1_file_type: string;
	step_2_title: string;
	step_2_description: string;
	step_2_url: string;
	step_2_file: string;
	step_2_file_type: string;
	step_3_title: string;
	step_3_description: string;
	step_3_url: string;
	step_3_file: string;
	step_3_file_type: string;
	step_4_title: string;
	step_4_description: string;
	step_4_url: string;
	step_4_file: string;
	step_4_file_type: string;
	step_5_title: string;
	step_5_description: string;
	step_5_url: string;
	step_5_file: string;
	step_5_file_type: string;
	step_6_title: string;
	step_6_description: string;
	step_6_url: string;
	step_6_file: string;
	step_6_file_type: string;
};

export function CreateMyRouteModal({
	learning_path,
	fetchSpecialLearningPaths,
}: {
	learning_path: RouteType;
	fetchSpecialLearningPaths?: () => void;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [learning_path_id, setLearningPathId] = useState<number | null>(null);

	const { register, handleSubmit, setValue } = useForm<FormFields>({
		defaultValues: {
			title: '',
			description: '',
			...Array.from({ length: 6 }, (_, i) => ({
				[`step_${i + 1}_title`]: '',
				[`step_${i + 1}_description`]: '',
			})),
		},
	});

	useEffect(() => {
		if (learning_path) {
			setLearningPathId(learning_path?.id);
			setValue('title', learning_path?.title);
			setValue('description', learning_path?.description);
			for (const step of learning_path?.steps) {
				setValue(
					`step_${step.step_number}_title` as keyof FormFields,
					step.title
				);
				setValue(
					`step_${step.step_number}_description` as keyof FormFields,
					step.description
				);
				setValue(
					`step_${step.step_number}_file` as keyof FormFields,
					step.file
				);
				setValue(`step_${step.step_number}_url` as keyof FormFields, step.url);
				setValue(
					`step_${step.step_number}_file_type` as keyof FormFields,
					step.file_type
				);
			}
		}
	}, [learning_path, setValue]);

	const handleCreateRoute = async (data: any) => {
		let learningpath = null;

		const steps = [];
		try {
			for (let i = 1; i <= 6; i++) {
				steps.push({
					title: data[`step_${i}_title`],
					description: data[`step_${i}_description`],
					step_number: i,
					url: data[`step_${i}_url`],
					file_type: data[`step_${i}_file_type`],
				});
			}

			if (!learning_path_id) {
				learningpath = await createLearningPath({
					title: data.title,
					description: data.description,
					steps: steps,
				});
				toast.success('Tu ruta ha sido creada exitosamente.');
			} else {
				learningpath = await updateLearningPath(learning_path_id, {
					title: data.title,
					description: data.description,
					steps: steps,
				});
				toast.success('Tu ruta ha sido actualizada exitosamente.');
			}
			if (fetchSpecialLearningPaths) fetchSpecialLearningPaths();
			setIsOpen(false);
			setLearningPathId(learningpath?.id);
		} catch (error: any) {
			ErrorParser(
				error,
				'Ocurrió un error al crear tu ruta.',
				'Error desconocido'
			);
		}
	};

	// const convertToBase64 = (file: any) =>
	// 	new Promise((resolve, reject) => {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(file);
	// 		reader.onload = () => resolve(reader.result);
	// 		reader.onerror = (error) => reject(error);
	// 	});

	// const handleUpload = async (data: any) => {
	// 	const { idx } = data;
	// 	let url = null;
	// 	let file = '';
	// 	if (data?.url) url = data.url;
	// 	if (data?.file) {
	// 		const fileBase64 = (await convertToBase64(data.file?.[0])) as string;
	// 		file = fileBase64;
	// 	}
	// 	const fieldName = `step_${idx}_content` as keyof FormFields;
	// 	setValue(fieldName, { url, file });
	// };

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="custom" size="custom">
					<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
						{learning_path_id ? 'Editar ruta' : 'Crear una ruta'}
					</p>
					<Image
						className="bg-white rounded-full p-1 w-8 h-8"
						src={plusIcon}
						alt="Picture of the author"
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[1280px] max-h-screen bg-transparent border-none">
				<div className="flex flex-col w-full h-full overflow-y-scroll max-h-screen no-scrollbar space-y-4 py-4">
					<Card className="w-full h-auto rounded-4xl bg-transparent flex flex-col items-center justify-around border-none space-y-2">
						<div className="w-full flex flex-col items-start mb-2">
							<form
								className="w-full h-full flex items-center justify-center overflow-y-hidden"
								onSubmit={(e) => e.preventDefault()}
							>
								<div className="w-full h-auto my-4 flex flex-col items-center space-y-4 px-2">
									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Información general de la ruta
									</p>
									<InputField
										register={register}
										label="title"
										placeholder="Titulo de la ruta"
									/>{' '}
									<InputField
										register={register}
										label="description"
										placeholder="Descipción de la ruta"
									/>
									<div className=" flex flex-row items-center justify-between flex-wrap w-full">
										{[...Array(6)].map((_, idx) => (
											<div
												key={idx}
												className="w-full md:w-[48%] m-2 flex flex-col gap-1"
											>
												<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
													Paso {idx + 1}
												</p>
												<InputField
													register={register}
													label={`step_${idx + 1}_title`}
													placeholder={`Titulo del paso ${idx + 1}`}
												/>
												<InputField
													register={register}
													label={`step_${idx + 1}_description`}
													placeholder={`Descripción del paso ${idx + 1}`}
												/>
												<InputField
													register={register}
													label={`step_${idx + 1}_url`}
													placeholder={`Dirección URL hacia el contenido del paso ${
														idx + 1
													}`}
												/>
												<SelectField
													register={register}
													label={`step_${idx + 1}_file_type`}
													placeholder={`Tipo de archivo del paso ${idx + 1}`}
													values={[
														{
															value: '',
															label: 'Selecciona un tipo de archivo',
														},
														{ value: 'video', label: 'Video' },
														{ value: 'image', label: 'Imagen' },
														{ value: 'otro', label: 'Otro' },
													]}
												/>
												{/* <UploadFileModal
													onUpload={handleUpload}
													idx={idx + 1}
												/> */}
											</div>
										))}
									</div>
									<div className="w-1/2">
										<ForwardButton
											text={learning_path_id ? 'Editar ruta' : 'Crear una ruta'}
											callback={handleSubmit((values) =>
												handleCreateRoute(values)
											)}
										/>
									</div>
								</div>
							</form>
						</div>
					</Card>
				</div>
			</DialogContent>
		</Dialog>
	);
}
