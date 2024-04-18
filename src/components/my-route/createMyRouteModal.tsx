'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useForm } from 'react-hook-form';
import plusIcon from '../../../public/PNG/plus-icon.png';
import Image from 'next/image';
import InputField from '../forms/inputField';
import ForwardButton from '../buttons/forwardButton';
import { UploadFileModal } from './uploadFileModal';
import { createLearningPath, createStep } from '@/utils/learning_paths';

export function CreateMyRouteModal() {
	const modalityValues = [
		{ value: 'P', label: 'Presencial' },
		{ value: 'R', label: 'Remoto' },
	];

	const dedicationValues = [
		{ value: 'F', label: 'Tiempo Completo' },
		{ value: 'T', label: 'Medio Tiempo' },
	];

	const { register, handleSubmit, setValue } = useForm({
		defaultValues: {
			title: '',
			description: '',
			...Array.from({ length: 6 }, (_, i) => ({
				[`step_${i + 1}_title`]: '',
				[`step_${i + 1}_description`]: '',
			})),
		},
	});

	const handleCreateRoute = async (data: any) => {
		const learningpath = await createLearningPath({
			title: data.title,
			description: data.description,
		});

		for (let i = 1; i <= 6; i++) {
			await createStep({
				title: data[`step_${i}_title`],
				description: data[`step_${i}_description`],
				learning_path: learningpath.id,
				step_number: i,
			});
		}
	};

	const handleUpload = (data: any) => {
		const { idx } = data;
		const fieldName = `step_${idx}_content` as
			| `${number}`
			| `${number}.${string}`;
		setValue(fieldName, data);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="custom" size="custom">
					<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
						Crear una ruta
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
													placeholder="Titulo del paso 1"
												/>
												<InputField
													register={register}
													label={`step_${idx + 1}_description`}
													placeholder="Descripción del paso 1"
												/>
												<UploadFileModal onUpload={handleUpload} idx={idx} />
											</div>
										))}
									</div>
									<div className="w-1/2">
										<ForwardButton
											text="Crear ruta"
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
