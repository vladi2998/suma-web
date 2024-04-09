'use client';
import { useContext } from 'react';
import H1 from '../H1';
import { CreateOffertModal } from './createOffertModal';
import AuthContext from '@/context/AuthProvider';

export default function TitleWorkingSection() {
	const { auth } = useContext(AuthContext) as any;
	const isAuth = auth.accessToken ? true : false;

	return (
		<div className="w-full h-auto flex flex-col items-start justify-start relative px-20 py-4">
			<div className="w-full flex flex-row items-center jusitfy-between">
				<H1>Trabajemos</H1>
				{isAuth && (
					<div className="w-1/2">
						<CreateOffertModal />
					</div>
				)}
			</div>
			<p className="w-2/3 text-2xl text-dark-gray my-12">
				Aquí podrás encontrar ofertas de empleo que nuestros egresados comparten
				contigo para que puedas encontrar nuevos retos profesionales.
			</p>
		</div>
	);
}
