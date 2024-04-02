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

export function CreateOffertModal() {
	const modalityValues = [
		{ value: "P", label: 'Presencial' },
		{ value: "R", label: 'Remoto' },
		{ value: "F", label: 'Tiempo Completo' },
		{ value: "T", label: 'Medio Tiempo' },
	];

	const { register, handleSubmit } = useForm({
		defaultValues: {
			company_name:'',
			company_location:'',
			company_description:'',
			contact_name:'',
			company_phone:'',
			company_email:'',
			job_description:'',
			job_functions:'',
			job_requirements:'',
			mode:'',
			job_title:'',
		},
	});

	const handleCreateOffert = async (data: any) => {
		await createJobOffer(data);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="custom"
					size="custom">
					<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
						Crear Oferta de Trabajo
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
								<div className="w-full h-auto my-4 flex flex-col items-center space-y-4">
									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Información de la Empresa
									</p>
									<InputField
										register={register}
										label="company_name"
										placeholder="Nombre de la Empresa"
									/>
									<InputField
										register={register}
										label="company_location"
										placeholder="Ubicación de la Empresa"
									/>
									<InputField
										register={register}
										label="company_description"
										placeholder="Descripción de la Empresa"
									/>
									<InputField
										register={register}
										label="contact_name"
										placeholder="Nombre del Contrato"
									/>
									<InputField
										register={register}
										label="company_phone"
										placeholder="Teléfono de Contacto"
									/>
									<InputField
										register={register}
										label="company_email"
										placeholder="Correo de Contacto"
									/>

									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Información de la Oferta
									</p>
									<InputField
										register={register}
										label="job_title"
										placeholder="Posición"
									/>
									<SelectField
										register={register}
										label="mode"
										values={modalityValues}
										placeholder="Modalidad"
									/>
									<InputField
										register={register}
										label="job_description"
										placeholder="Descripción"
									/>
									<InputField
										register={register}
										label="job_functions"
										placeholder="Funciones"
									/>
									<InputField
										register={register}
										label="job_requirements"
										placeholder="Requisitos"
									/>
									<InputField
										register={register}
										label="extra_info"
										placeholder="Información Extra"
									/>
									<div className="w-1/2">
										<ForwardButton
											text="Crear Oferta de Trabajo"
											callback={handleSubmit((values) =>
												handleCreateOffert(values)
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
