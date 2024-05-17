'use client';
import Image from 'next/image';
import bgImageLogin from '../../../public/img-bg.webp';
import bgMountains from '../../../public/PNG/mountainsBackgroundFHD.png';
import sumateLogo from '../../../public/PNG/sumados-logo.png';
import ForwardButton from '@/components/buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '@/components/forms/inputField';
import { registerStudent, registerTeacher } from '@/utils/auth';
import PasswordField from '@/components/forms/passwordField';
import SelectField, { ItemValue } from '@/components/forms/inputSelect';
import { ChangeEvent, useEffect, useState } from 'react';
import CheckboxField from '@/components/forms/checkboxField';
import { useRouter } from 'next/navigation';
import axiosConfigInstance from '@/config/axiosCofig';
import { toast } from 'sonner';
import {
	getPostgraduatesCareers,
	getPregraduatesCareers,
} from '@/utils/careers';

type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export default function RegisterPage() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
	} = useForm({
		defaultValues: {
			user: {
				password: '',
				user_type: 0,
			},
			is_currently_enrolled: false,
			postgraduate_too: false,
			undergraduate_program: undefined,
			undergraduate_graduation_date: undefined,
			postgraduate_program: undefined,
			postgraduate_graduation_date: undefined,
		},
	});

	const genderChoices: any[] = [
		{ value: 'Masculino', label: 'Masculino' },
		{ value: 'Femenino', label: 'Femenino' },
		{ value: 'Prefiero no decirlo', label: 'Prefiero no decirlo' },
	];

	const userType: ItemValue[] = [
		{ value: 0, label: 'Pregrado' },
		{ value: 1, label: 'Postgrado' },
		{ value: 2, label: 'Profesor' },
	];

	const pregraduates_faculties: ItemValue[] = [
		{
			value: 'Ciencias de la Comunicación e Información',
			label: 'Ciencias de la Comunicación e Información',
		},
		{ value: 'Ciencias de la Educación', label: 'Ciencias de la Educación' },
		{
			value: 'Ciencias Económicas y Administrativas',
			label: 'Ciencias Económicas y Administrativas',
		},
		{
			value: 'Ciencias Jurídicas y Políticas',
			label: 'Ciencias Jurídicas y Políticas',
		},
	];

	const [pregraduates_careers, setPregraduatesCareers] = useState<ItemValue[]>(
		[]
	);
	const [postgraduates_carreers, setPostgraduates_carreers] = useState<
		ItemValue[]
	>([]);

	useEffect(() => {
		const _getPregraduatesCareers = async () => {
			try {
				const resp = await getPregraduatesCareers();
				setPregraduatesCareers(resp);
			} catch (error) {
				console.log('Error getting pregraduates careers: ', error);
			}
		};

		const _getPostgraduatesCareers = async () => {
			try {
				const resp = await getPostgraduatesCareers();
				setPostgraduates_carreers(resp);
			} catch (error) {
				console.log('Error getting postgraduates careers: ', error);
			}
		};

		_getPregraduatesCareers();
		_getPostgraduatesCareers();
	}, []);

	const [selectedType, setSelectedType] = useState<ItemValue | null>(
		userType[0]
	);
	const [isPostGraduate, setIsPostGraduate] = useState(false);
	const [isUnderGraduate, setIsUnderGraduate] = useState(true);
	const [isTeacher, setIsTeacher] = useState(false);
	const [isCurrentlyEnrrolled, setIsCurrentlyEnrrolled] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		if (selectedType && selectedType.label === 'Postgrado') {
			setIsPostGraduate(true);
			setIsUnderGraduate(false);
			setIsTeacher(false);
		} else if (selectedType && selectedType.label === 'Pregrado') {
			setIsPostGraduate(false);
			setIsUnderGraduate(true);
			setIsTeacher(false);
		} else {
			setIsPostGraduate(false);
			setIsUnderGraduate(false);
			setIsTeacher(true);
		}
	}, [selectedType]);

	const handleSelectChange = (event: SelectChangeEvent) => {
		const selectedValue = Number(event.target.value);
		const selectedOption = userType.find(
			(option) => option.value === selectedValue
		);
		setSelectedType(selectedOption || null);
	};

	const handleCheckboxChange = () =>
		setIsCurrentlyEnrrolled(!getValues('is_currently_enrolled'));

	const handleCheckboxPostGraduateTooChange = () => {
		setIsPostGraduate(!isPostGraduate);
		setIsCurrentlyEnrrolled(!getValues('postgraduate_too'));
	};

	const getListOfYears = () => {
		const currentYear = new Date().getFullYear();
		const fundationYearUMA = 1998;
		const years = [];
		for (let i = currentYear; i >= fundationYearUMA; i--) {
			years.push({ value: i, label: `${i}` });
		}
		return years;
	};

	return (
		<>
			<div
				style={{
					zIndex: -1,
					position: 'fixed',
					width: '100vw',
					height: '100vh',
				}}
			>
				<Image
					src={bgImageLogin}
					alt="image-bg"
					layout="fill"
					objectFit="cover"
				/>
				<Image
					src={bgMountains}
					className="z-10"
					alt="image-mountains-bg"
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute w-full h-full bg-light-green opacity-50 z-0" />
			</div>
			<form
				className="w-full h-auto flex items-center justify-center z-10 overflow-y-hidden"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="bg-white w-4/5 sm:w-1/2 md:w-2/3 xl:w-1/3 h-auto flex flex-col items-center justify-around py-12 px-6 md:px-12 2xl:px-18 rounded-8xl space-y-12">
					<Image
						src={sumateLogo}
						width={300}
						height={300}
						alt="Picture of the author"
					/>

					<InputField
						register={register}
						label="user.email"
						placeholder="Correo Electrónico"
					/>
					<InputField
						register={register}
						label="user.document_id"
						placeholder="Documento de Identidad"
					/>
					<InputField
						register={register}
						label="user.phone_number"
						placeholder="Número de teléfono"
					/>
					<PasswordField
						register={register}
						label="user.password"
						placeholder="Contraseña"
						validation={{
							required: 'Por favor elige una contraseña',
							minLength: {
								value: 8,
								message: 'La contraseña debe tener al menos 8 carácteres',
							},
						}}
						errors={errors}
					/>
					<PasswordField
						register={register}
						label="user.repeated_password"
						placeholder="Repite tu contraseña"
						errors={errors}
						validation={{
							validate: (value) =>
								value === getValues('user.password') ||
								'Las contraseñas deben ser iguales',
						}}
					/>
					<SelectField
						register={register}
						label="user.gender"
						errors={errors}
						values={genderChoices}
						placeholder="Sexo"
					/>
					<InputField
						register={register}
						label="user.exp_area"
						placeholder="Área de experiencia"
					/>
					<SelectField
						register={register}
						label="user.user_type"
						errors={errors}
						values={userType}
						onChange={handleSelectChange}
					/>
					{isUnderGraduate && (
						<>
							{' '}
							<SelectField
								register={register}
								label="faculty"
								errors={errors}
								values={pregraduates_faculties}
								placeholder="Facultad"
							/>
							<SelectField
								register={register}
								label="undergraduate_program"
								errors={errors}
								values={pregraduates_careers}
								placeholder="Carrera de Pregrado"
							/>
							<div className="w-full flex justify-around items-center">
								{!isPostGraduate && (
									<div className="flex items-center justify-around w-1/2">
										<CheckboxField
											register={register}
											tag="Sigo Cursando"
											label="is_currently_enrolled"
											errors={errors}
											onClick={handleCheckboxChange}
										/>
									</div>
								)}
								{(!isCurrentlyEnrrolled || isPostGraduate) && (
									<div className={`w-1/2 ${isPostGraduate ? 'w-2/3' : ''}`}>
										<SelectField
											register={register}
											label="undergraduate_graduation_date"
											errors={errors}
											values={getListOfYears()}
											placeholder="Año de Graduación de Pregrado"
										/>
									</div>
								)}
							</div>
							<div className="w-full flex justify-around items-center">
								<div className="flex items-center justify-around">
									<CheckboxField
										register={register}
										tag="También soy estudiante de postgrado"
										label="user.postgraduate_too"
										errors={errors}
										onClick={handleCheckboxPostGraduateTooChange}
									/>
								</div>
							</div>
						</>
					)}

					{isPostGraduate && (
						<>
							<SelectField
								register={register}
								label="postgraduate_program"
								errors={errors}
								values={postgraduates_carreers}
								placeholder="Área de Postgrado"
							/>
							<div className="w-full flex justify-around items-center">
								<div className="flex items-center justify-around w-1/2">
									<CheckboxField
										register={register}
										tag="Sigo Cursando"
										label="is_currently_enrolled"
										errors={errors}
										onClick={handleCheckboxChange}
									/>
								</div>
								{!isCurrentlyEnrrolled && (
									<div className="w-1/2">
										<SelectField
											register={register}
											label="postgraduate_graduation_date"
											errors={errors}
											values={getListOfYears()}
											placeholder="Año de Graduación de Postgrado"
										/>
									</div>
								)}
							</div>
						</>
					)}

					{isTeacher && (
						<>
							<InputField
								register={register}
								label="career"
								placeholder="Carrera"
							/>
							<InputField
								register={register}
								label="study_level"
								placeholder="Nivel de estudios"
							/>
							<InputField
								register={register}
								label="charge"
								placeholder="Cargo"
							/>
						</>
					)}

					<ForwardButton
						text="Registrarse"
						isLoading={isLoading}
						callback={handleSubmit(async (values) => {
							setIsLoading(true);

							if (values.is_currently_enrolled) {
								values.undergraduate_graduation_date = undefined;
								values.postgraduate_graduation_date = undefined;
							}

							try {
								if (isUnderGraduate || isPostGraduate) {
									await registerStudent(values);
								} else if (isTeacher) {
									await registerTeacher(values);
								}
								toast.success('¡Registro exitoso!', {
									description:
										'Por favor inicia sesión para continuar navegando.',
								});
							} catch (error: any) {
								toast.error('Ocurrió un error al registrarte.', {
									description: `${
										error?.message ?? JSON.stringify(error?.user)
									}`,
								});
								return;
							} finally {
								setIsLoading(false);
							}

							router.push('/login');
						})}
					/>
				</div>
			</form>
		</>
	);
}
