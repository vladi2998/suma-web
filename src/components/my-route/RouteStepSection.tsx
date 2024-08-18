'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import H1 from '../H1';
import { StepType } from './RouteComponent';
import BackButton from '../buttons/backButton';
import { useRouter } from 'next/navigation';
import RatingComponent from './RouteRating';
import '@justinribeiro/lite-youtube';

export default function RouteStepSection({ step }: { step?: StepType }) {
	const router = useRouter();
	const bg =
		step?.file_type === 'video'
			? 'bg-blue'
			: step?.file_type === 'image'
			? 'bg-yellow'
			: 'bg-red';

	const [videoId, setVideoId] = useState<string | null>(null);

	useEffect(() => {
		if (step?.file_type === 'video' && step?.url) {
			setVideoId(extractVideoId(step.url));
		}
	}, [step]);

	const extractVideoId = (url: string) => {
		const urlObj = new URL(url);
		return urlObj.searchParams.get('v');
	};

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
					{step?.file_type === 'image' ? (
						<img
							width={500}
							height={500}
							src={step?.url}
							alt={`route-summary-section-img`}
							className="w-2/3"
						/>
					) : step?.file_type === 'video' ? (
						<lite-youtube videoid={videoId}></lite-youtube>
					) : null}
					<div className="w-full">
						Si no puedes ver el material, haz{' '}
						<a
							href={step?.url}
							target="_blank"
							className="font-bold underline hover:cursor-pointer">
							click aquí
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
