'use client';
import Image from 'next/image';
import bgImageLogin from '../../../public/img-bg.webp';
import bgMountains from '../../../public/PNG/mountainsBackgroundFHD.png';
import sumateLogo from '../../../public/PNG/sumados-logo.png';
import ForwardButton from '@/components/buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '@/components/forms/inputField';
import PasswordField from '@/components/forms/passwordField';
import AuthContext from '@/context/AuthProvider';
import { useContext, useState } from 'react';
import { getTokens } from '@/utils/tokens';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

export default function LoginPage() {
	const router = useRouter();
	const { register, handleSubmit } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const { setAuth } = useContext(AuthContext) as any;
	const onSubmit = async (values: any) => {
		setIsLoading(true);
		try {
			const resp = await getTokens(values);
			setAuth({ accessToken: resp.access, refreshToken: resp.refresh });
			localStorage.setItem('accessToken', resp.access);
			localStorage.setItem('refreshToken', resp.refresh);
			router.push('/profile');
		} catch (error: any) {
			toast.error('Ocurrió un error al iniciar sesión.', {
				description: `${error.detail}`,
			});
		} finally {
			setIsLoading(false);
		}
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
			<form className="w-full h-screen flex items-center justify-center z-10 overflow-y-hidden">
				<div className="bg-white w-4/5 sm:w-1/2 md:w-2/3 xl:w-1/3 h-auto flex flex-col items-center justify-around py-12 px-6 md:px-12 2xl:px-18 rounded-8xl space-y-12">
					<Image
						src={sumateLogo}
						width={300}
						height={300}
						alt="Picture of the author"
					/>

					<InputField
						register={register}
						label="email"
						placeholder="Correo Electrónico"
					/>
					<PasswordField
						register={register}
						label="password"
						placeholder="Contraseña"
						errors={{}}
					/>
					<ForwardButton
						text="Iniciar Sesión"
						callback={handleSubmit((values) => onSubmit(values))}
						isLoading={isLoading}
					/>
					<div className="flex flex-col items-center justify-center space-y-2">
						<Link
							href="/password-reset"
							className="text-center text-green text-sm"
						>
							¿Olvidaste tu contraseña? Haz click aquí.
						</Link>
						<Link href="/register" className="text-center text-green text-sm">
							¿No tienes cuenta? Regístrate aquí.
						</Link>
					</div>
				</div>
			</form>
		</>
	);
}
