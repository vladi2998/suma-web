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

export function CreateOffertModal() {
	const modalityValues = [
		{ value: 0, label: 'Presencial' },
		{ value: 1, label: 'Remoto' },
		{ value: 2, label: 'Tiempo Completo' },
		{ value: 3, label: 'Medio Tiempo' },
	];

	const { register, handleSubmit } = useForm({
		defaultValues: {
			company_info: {
				name: '',
				location: '',
				description: '',
				contract_name: '',
				phone: '',
				email: '',
			},
			contract_info: {
				position: '',
				modality: '0',
				description: '',
				functions: '',
				requirements: '',
				extra_info: '',
			},
		},
	});

	const handleCreateOffert = async (data: any) => {
		console.log(data);
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
										label="company_info.name"
										placeholder="Nombre de la Empresa"
									/>
									<InputField
										register={register}
										label="company_info.location"
										placeholder="Ubicación de la Empresa"
									/>
									<InputField
										register={register}
										label="company_info.description"
										placeholder="Descripción de la Empresa"
									/>
									<InputField
										register={register}
										label="company_info.contract_name"
										placeholder="Nombre del Contrato"
									/>
									<InputField
										register={register}
										label="company_info.phone"
										placeholder="Teléfono de Contacto"
									/>
									<InputField
										register={register}
										label="company_info.email"
										placeholder="Correo de Contacto"
									/>

									<p className="w-full text-xl font-semibold text-white bg-dark-green p-3 rounded-xl">
										Información de la Oferta
									</p>
									<InputField
										register={register}
										label="contract_info.position"
										placeholder="Posición"
									/>
									<SelectField
										register={register}
										label="contract_info.modality"
										values={modalityValues}
										placeholder="Modalidad"
									/>
									<InputField
										register={register}
										label="contract_info.description"
										placeholder="Descripción"
									/>
									<InputField
										register={register}
										label="contract_info.functions"
										placeholder="Funciones"
									/>
									<InputField
										register={register}
										label="contract_info.requirements"
										placeholder="Requisitos"
									/>
									<InputField
										register={register}
										label="contract_info.extra_info"
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
