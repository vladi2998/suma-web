'use client';

import H1 from '../H1';
import { StepType } from './RouteComponent';
import BackButton from '../buttons/backButton';
import { useRouter } from 'next/navigation';
import RatingComponent from './RouteRating';

export default function RouteStepSection({ step }: { step?: StepType }) {
	const router = useRouter();
	const bg = 'bg-blue';

	return (
		<div
			className={`relative w-full h-full xl:h-132 flex flex-col items-center px-4 md:px-0 py-8 space-y-4 overflow-hidden rounded-4xl ${bg}`}>
			<div className="flex flex-col md:flex-row items-center justify-around w-full h-full z-10 text-white ">
				<div className="w-full h-full md:w-1/2 md:px-20 flex flex-col items-center justify-around space-y-12">
					<div className="w-full">
						<div className="w-full md:w-10/12 xl:w-1/3">
							<BackButton
								text="Volver"
								callback={() => router.push('/my-route')}
							/>
						</div>
					</div>
					<H1 className="text-white">{step?.title ?? 'Title of Step'}</H1>
					<div className="w-full">
						<div className="border border-white w-1/2" />
					</div>
					<div className="w-full h-full text-xl flex items-start justify-start">
						{step?.description ??
							'Descubre cómo inspirar y guiar a tus estudiantes hacia el éxito, fomentando un ambiente de respeto y colaboración. Aprende técnicas para ser un modelo a seguir y un líder educativo efectivo.'}
					</div>
					<div className="w-full flex items-start">
						<RatingComponent
							stars={4.1}
							votes={1622}
							students={2350}
						/>
					</div>
				</div>
				<div className="w-full h-full md:w-1/2 md:px-20 flex flex-col justify-center items-center text-center mt-8 md:my-0">
					{/* <Image
						src={step?.img ?? }
						className="w-2/3"
						alt={`route-summary-section-img`}
					/> */}
					<div className="w-full h-96 bg-white rounded-xl "></div>
					<div className="w-full">
						Si no puedes ver el material, haz{' '}
						<a className="font-bold underline hover:cursor-pointer">
							click aquí
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
