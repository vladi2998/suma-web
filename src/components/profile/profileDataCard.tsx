import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ForwardButton from '../buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '../forms/inputField';
import { getProfileData, updateStudent, updateTeacher } from '@/utils/user';
import SelectField, { ItemValue } from '../forms/inputSelect';
import CheckboxField from '../forms/checkboxField';
import { useContext, useEffect, useState } from 'react';
import {
	getPostgraduatesCareers,
	getPregraduatesCareers,
} from '@/utils/careers';
import DotsLoader from '../loaders/dotsLoader';
import H1 from '../H1';
import UserContext from '@/context/UserProvider';

export function ProfileDataCard() {
	const {
		register,
		handleSubmit,
		formState: errors,
		getValues,
		setValue,
	} = useForm({
		defaultValues: {
			user: {
				email: '',
				first_name: '',
				last_name: '',
				document_id: '',
				phone_number: '',
			},
			undergraduate_program: null,
			postgraduate_program: null,
			undergraduate_graduation_date: null,
			postgraduate_graduation_date: null,
			career: null,
			charge: null,
			study_level: null,
			is_currently_enrolled: true,
			postgraduate_too: false,
			coins: null,
			faculty: null,
		},
	});

	const [isLoading, setIsLoading] = useState(false);
	const { user, setUser } = useContext(UserContext) as any;

	const [isPostGraduate, setIsPostGraduate] = useState(
		// TODO
		// user.is_postgraduate
		true
	);
	const [isUnderGraduate, setIsUnderGraduate] = useState(
		// TODO
		// user.is_undergraduate
		true
	);
	const [isTeacher, setIsTeacher] = useState(
		// TODO
		// user.is_teacher
		false
	);
	const [isCurrentlyEnrrolled, setIsCurrentlyEnrrolled] = useState(
		// TODO
		// user.is_currently_enrolled
		false
	);

	const [pregraduates_careers, setPregraduatesCareers] = useState<ItemValue[]>(
		[]
	);
	const [postgraduates_carreers, setPostgraduates_carreers] = useState<
		ItemValue[]
	>([]);
	const getProfile = async () => {
		setIsLoading(true);
		try {
			const resp = await getProfileData();
			setUser(resp);
			setValue('user.email', resp.user.email);
			setValue('user.first_name', resp.user.first_name);
			setValue('user.last_name', resp.user.last_name);
			setValue('user.document_id', resp.user.document_id);
			setValue('user.phone_number', resp.user.phone_number);
			setValue('undergraduate_program', resp.undergraduate_program);
			setValue('postgraduate_program', resp.postgraduate_program);
			setValue(
				'undergraduate_graduation_date',
				resp.undergraduate_graduation_date
			);
			setValue(
				'postgraduate_graduation_date',
				resp.postgraduate_graduation_date
			);
			setValue('career', resp.career);
			setValue('charge', resp.charge);
			setValue('study_level', resp.study_level);
			setValue('is_currently_enrolled', resp.is_currently_enrolled);
			setValue('postgraduate_too', resp.postgraduate_too);
			setValue('coins', resp.coins);
			setValue('faculty', resp.faculty);
		} catch (error) {
			console.log('Error getting profile data: ', error);
		} finally {
			setIsLoading(false);
		}
	};

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

	useEffect(() => {
		getProfile();
		_getPregraduatesCareers();
		_getPostgraduatesCareers();
	}, [getValues, isPostGraduate]);

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

	const {
		register: registerCredentials,
		handleSubmit: handleSubmitCredentials,
	} = useForm({
		defaultValues: {
			email: 'example@example.com',
		},
	});

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

	const onSubmitProfile = async (values: any) => {
		console.log(values);
		//  if(user.is_estudent) await updateStudent(values, 31);
		//  else await updateTeacher(values, 3);
	};

	return (
		<Tabs
			defaultValue="account"
			className="relative w-full h-auto">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="account">Cuenta</TabsTrigger>
				<TabsTrigger value="credentials">Credenciales</TabsTrigger>
			</TabsList>
			{isLoading ? (
				<div className="flex flex-col items-center my-4 space-y-4">
					<p className="text-xl text-dark-green font-semibold">
						Estamos cargando tus datos
					</p>
					<DotsLoader />
				</div>
			) : (
				<>
					<TabsContent value="account">
						<Card>
							<CardHeader>
								<CardTitle>Datos Personales</CardTitle>
								<CardDescription>
									Aqui podrás ver y cambiar los datos de tu cuenta.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-1">
									<Label htmlFor="name">Nombre</Label>
									<InputField
										register={register}
										label="user.first_name"
										placeholder="Nombre"
									/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="lastname">Apellido</Label>
									<InputField
										register={register}
										label="user.last_name"
										placeholder="Apellido"
									/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="phone">Telefono</Label>
									<InputField
										register={register}
										label="user.phone_number"
										placeholder="Ex: 04121234567"
									/>
								</div>

								{/*
						TODO: AGREGAR VALIDACIONES PARA VER QUE TIPO DE USUARIO
						ES PARA AGREGAR LOS CAMPOS CORRESPONDIENTES COMO EN EL REGISTRO
						 */}

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
												<div
													className={`w-1/2 ${isPostGraduate ? 'w-2/3' : ''}`}>
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
							</CardContent>
							<CardFooter>
								<ForwardButton
									text="Guardar Cambios"
									callback={handleSubmit(async (values) => {
										await onSubmitProfile(values);
									})}
								/>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value="credentials">
						<Card>
							<CardHeader>
								<CardTitle>Credenciales</CardTitle>
								<CardDescription>
									Cambia las credenciales asociadas a tu cuenta.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-1">
									<Label htmlFor="email">Correo Electrónico</Label>
									<InputField
										register={registerCredentials}
										label="email"
										placeholder="Nombre"
									/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="password">Contraseña</Label>
									<InputField
										register={registerCredentials}
										label="password"
										placeholder="Contraseña"
									/>
								</div>
							</CardContent>
							<CardFooter>
								<ForwardButton
									text="Guardar Cambios"
									callback={handleSubmitCredentials((values) =>
										console.log(values)
									)}
								/>
							</CardFooter>
						</Card>
					</TabsContent>
				</>
			)}
		</Tabs>
	);
}
