'use client';

import Image from 'next/image';
import H1 from '../H1';
import backgroundGirls from '../../../public/PNG/background-girls.png';
import ForwardButton from '../buttons/forwardButton';
import Link from 'next/link';

export default function MyRouteSection() {
	return (
		<div className="w-full h-screen flex flex-col items-center py-12 space-y-8 relative">
			<div className="absolute top-24 left-24 w-132 z-10">
				<H1>Plataforma de Networking</H1>
				<p>para estudiantes y egresados de la universidad Monteávila</p>
			</div>
			<div className="w-full h-auto flex flex-wrap md:flex-row justify-around items-center">
				<Image
					src={backgroundGirls}
					alt="image-mountains-bg"
					className="object-none"
					layout="fill"
				/>
			</div>
			<div className="w-full flex justify-start absolute bottom-24 left-24">
				<Link
					href="/my-route/"
					className="w-96 flex items-center justify-center">
					<ForwardButton text="Mi ruta" />
				</Link>
			</div>
		</div>
	);
}
