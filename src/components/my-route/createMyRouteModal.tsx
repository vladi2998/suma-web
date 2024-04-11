'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useForm } from 'react-hook-form';
import plusIcon from '../../../public/PNG/plus-icon.png';
import Image from 'next/image';
import InputField from '../forms/inputField';
import ForwardButton from '../buttons/forwardButton';
import SelectField from '../forms/inputSelect';
import { createJobOffer } from '@/utils/offerjobs';
import { StepBack } from 'lucide-react';
import { UploadFileModal } from './uploadFileModal';

export function CreateMyRouteModal() {
	const modalityValues = [
		{ value: 'P', label: 'Presencial' },
		{ value: 'R', label: 'Remoto' },
	];

	const dedicationValues = [
		{ value: 'F', label: 'Tiempo Completo' },
		{ value: 'T', label: 'Medio Tiempo' },
	];

	const { register, handleSubmit } = useForm({
		defaultValues: {
			title: '',
			step_1_title: '',
			step_1_description: '',
			step_2_title: '',
			step_2_description: '',
			step_3_title: '',
			step_3_description: '',
			step_4_title: '',
			step_4_description: '',
			step_5_title: '',
			step_5_descrption: '',
			step_6_title: '',
			step_6_description: '',
		},
	});

	const handleCreateRoute = async (data: any) => {
		console.log(data);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="custom"
					size="custom">
					<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
						Crear oferta de trabajo
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
								onSubmit={(e) => e.preventDefault()}>
								<div className="w-full h-auto my-4 flex flex-col items-center space-y-4 px-2">
									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Información general de la ruta
									</p>
									<InputField
										register={register}
										label="title"
										placeholder="Titulo de la ruta"
									/>
									<div className="w-full flex flex-row items-center justify-between">
										<div className="w-1/2 space-y-4 px-1 flex flex-col">
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 1
											</p>
											<InputField
												register={register}
												label="step_1_title"
												placeholder="Titulo del paso 1"
											/>
											<InputField
												register={register}
												label="step_1_description"
												placeholder="Descripción del paso 1"
											/>
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 2
											</p>
											<InputField
												register={register}
												label="step_2_title"
												placeholder="Titulo del paso 2"
											/>
											<InputField
												register={register}
												label="step_2_description"
												placeholder="Descripción del paso 2"
											/>
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 3
											</p>
											<InputField
												register={register}
												label="step_3_title"
												placeholder="Titulo del paso 3"
											/>
											<InputField
												register={register}
												label="step_3_description"
												placeholder="Descripción del paso 3"
											/>
										</div>
										<div className="w-1/2 space-y-4 px-1 flex flex-col">
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 4
											</p>
											<InputField
												register={register}
												label="step_4_title"
												placeholder="Titulo del paso 4"
											/>
											<InputField
												register={register}
												label="step_4_description"
												placeholder="Descripción del paso 4"
											/>
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 5
											</p>
											<InputField
												register={register}
												label="step_5_title"
												placeholder="Titulo del paso 5"
											/>
											<InputField
												register={register}
												label="step_5_description"
												placeholder="Descripción del paso 5"
											/>
											<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
												Paso 6
											</p>
											<InputField
												register={register}
												label="step_6_title"
												placeholder="Titulo del paso 6"
											/>
											<InputField
												register={register}
												label="step_6_description"
												placeholder="Descripción del paso 6"
											/>
										</div>
									</div>

									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Archivos necesarios para esta ruta
									</p>

									<div className="w-full px-4 my-4">
										<UploadFileModal />
									</div>

									<div className="w-1/2">
										<ForwardButton
											text="Crear oferta de trabajo"
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
