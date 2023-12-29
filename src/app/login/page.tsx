'use client';
import Image from 'next/image';
import bgImageLogin from '../../../public/img-bg.webp';
import ForwardButton from '@/components/buttons/forwardButton';
import { useForm } from 'react-hook-form';
import InputField from '@/components/forms/inputField';
import sumateLogo from '../../../public/sumate.png';

export default function LoginPage() {
	const { register, handleSubmit } = useForm();
	return (
		<>
			<div
				className='absolute w-full h-full bg-green-700 opacity-50 z-0'
			/>
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
			</div>
			<form className="w-full flex items-center justify-center my-auto z-10">
				<div className="bg-white w-1/2 lg:w-1/3 h-auto flex flex-col items-center justify-around py-12 px-6 md:px-12 2xl:px-24 rounded-3xl space-y-12">
					<Image
						src={sumateLogo}
						width={200}
						height={200}
						alt="Picture of the author"
					/>

					<InputField
						register={register}
						label="user"
						placeholder="Usuario"
					/>
					<InputField
						register={register}
						label="password"
						placeholder="Contraseña"
					/>
					<ForwardButton
						text="Iniciar Sesión"
						callback={handleSubmit((data) => console.log(data))}
					/>
				</div>
			</form>
		</>
	);
}
