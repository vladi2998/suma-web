'use client';
import Image from 'next/image';
import bgImageLogin from '../../../public/img-bg.webp';
import bgMountains from '../../../public/PNG/mountains.png';
import sumateLogo from '../../../public/PNG/sumados-logo.png';
import ForwardButton from '@/components/buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '@/components/forms/inputField';
import { getUser } from '@/utils/auth';
import PasswordField from '@/components/forms/passwordField';

export default function RegisterPage() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
	} = useForm({});

	return (
		<>
			<div
				style={{
					zIndex: -1,
					position: 'fixed',
					width: '100vw',
					height: '100vh',
				}}>
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
				className="w-full h-screen flex items-center justify-center z-10 overflow-y-hidden"
				onSubmit={(e) => e.preventDefault()}>
				<div className="bg-white w-4/5 sm:w-1/2 md:w-2/3 xl:w-1/3 h-auto flex flex-col items-center justify-around py-12 px-6 md:px-12 2xl:px-18 rounded-8xl space-y-12">
					<Image
						src={sumateLogo}
						width={300}
						height={300}
						alt="Picture of the author"
					/>

					<InputField
						register={register}
						label="user"
						placeholder="Usuario"
					/>
					<PasswordField
						register={register}
						label="password"
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
						label="repeated_password"
						placeholder="Repite tu Contraseña"
						errors={errors}
						validation={{
							validate: (value) =>
								value === getValues('password') ||
								'Las contraseñas deben ser iguales',
						}}
					/>
					<ForwardButton
						text="Registrarse"
						callback={handleSubmit(() => getUser())}
					/>
				</div>
			</form>
		</>
	);
}
