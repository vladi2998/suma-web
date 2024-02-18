'use client';

import Image from 'next/image';
import backgroundGirls from '../../../public/PNG/background-girls.png';
import SearchBar from '../searchbar';

export default function MyRouteSection() {
	return (
		<div className="w-full h-72 md:h-96 lg:h-132 xl:h-screen md:flex items-start justify-center relative mt-2">
			<div className="absolute top-8 w-1/3 md:top-24 left-2 md:left-4 left-4 lg:left-24 md:w-96 lg:w-160 z-10">
				<h1 className="w-full text-xl md:text-4xl lg:text-8xl font-bold text-start">
					Plataforma de Networking
				</h1>
				<p className="w-full text-start text-sm sm:text-xl">
					para estudiantes y egresados de la universidad Monteávila
				</p>
			</div>
			<Image
				src={backgroundGirls}
				className=""
				alt={`banner-img-history-page`}
				layout="fill"
			/>

			<div className="absolute w-72 md:w-96 lg:w-132 flex justify-start bottom-4 lg:bottom-24 left-4 lg:left-24">
				<SearchBar />
			</div>
		</div>
	);
}
