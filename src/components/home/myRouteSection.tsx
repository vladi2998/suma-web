'use client';

import Image from 'next/image';
import H1 from '../H1';
import backgroundGirls from '../../../public/PNG/background-girls.png';
import ForwardButton from '../buttons/forwardButton';
import Link from 'next/link';

export default function MyRouteSection() {
	return (
		<div className="w-full h-72 md:h-96 lg:h-132 xl:h-screen md:flex items-start justify-center relative mt-2">
			<div className="absolute top-24 left-4 lg:left-24 w-96 lg:w-132 z-10">
				<h1 className="w-full text-xl md:text-4xl lg:text-8xl font-bold text-start">
					Plataforma de Networking
				</h1>
				<p>para estudiantes y egresados de la universidad Monteávila</p>
			</div>
			<Image
				src={backgroundGirls}
				className=""
				alt={`banner-img-history-page`}
				layout="fill"
			/>

			<div className="absolute w-72 md:w-96 lg:w-132 flex justify-start bottom-4 lg:bottom-24 left-4 lg:left-24">
				<Link
					href="/my-route/"
					className="w-full flex items-center justify-center">
					<ForwardButton text="Mi ruta" />
				</Link>
			</div>
		</div>
	);
}
