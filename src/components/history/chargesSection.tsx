import Image from 'next/image';

import addingItemImg from '../../../public/WEBP/addingItemImg.webp';
import emptyAddingImg from '../../../public/PNG/profile_bg.png';
import GUILLERMO from '../../../public/History/GUILLERMO.png';
import ORLANDO from '../../../public/History/ORLANDO.png';
import ANA from '../../../public/History/ANA BEATRIZ.png';
import ALESIA from '../../../public/History/ALESIA.png';
import JOSE  from '../../../public/History/JOSE ANTONIO.png';
import MARIANNA from '../../../public/History/MARIANNA.png';
import RODRIGO from '../../../public/History/RODRIGO.png';
import IGNACIO from '../../../public/History/JOSE IGNACIO.png';

import bgMountainsTablet from '../../../public/PNG/mountainsBackgroundTablet.png';
import bgMountainsMobile from '../../../public/PNG/mountainsBackgroundFHD.png';
import ChargesItem from './chargesItem';

export default function ChargesSection() {
	const chargesSectionList = [
		{
			name: 'Guillermo Fariñas Contreras',
			role: 'Rector y Presidente',
			img: GUILLERMO,
		},
		{
			name: 'Orlando Pérez Caldera',
			role: 'Tesorero',
			img: ORLANDO,
		},
		{
			name: 'Ana Beatriz Monteverde',
			role: 'Secretaria General',
			img: ANA,
		},
		{
			name: 'Alesia Santacroce',
			role: 'Directora Principal',
			img: ALESIA,
		},
		{
			name: 'José Antonio De Oliveira',
			role: 'Director Adjunto',
			img: JOSE,
		},
		{
			name: 'Marianna Moreno',
			role: 'Director Adjunto',
			img: MARIANNA,
		},
		{
			name: 'Rodrigo Farías',
			role: 'Director Adjunto',
			img: RODRIGO,
		},
		{
			name: 'José Ignacio Arcaya',
			role: 'Director Adjunto',
			img: IGNACIO,
		},
	];

	return (
		<div className="relative w-screen h-auto bg-light-gray">
			{/* <Image
				src={bgMountainsMobile}
				className="object-fill hidden lg:block"
				alt="image-mountains-bg"
				layout="fill"
			/>
			<Image
				src={bgMountainsTablet}
				className="hidden object-fill md:block"
				alt="image-mountains-bg"
				layout="fill"
			/> */}
			<div className="w-full h-full flex flex-col items-center py-8 space-y-4">
				<h1 className="w-full text-4xl md:text-7xl font-bold text-center">
					Junta Directiva
				</h1>
				<div className="w-full h-auto z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
					{chargesSectionList.map((item, idx) => (
						<ChargesItem
							{...item}
							key={idx}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
