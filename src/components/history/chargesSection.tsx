import Image from 'next/image';


import addingItemImg from '../../../public/WEBP/addingItemImg.webp';
import emptyAddingImg from '../../../public/PNG/profile_bg.png';

import bgMountainsTablet from '../../../public/PNG/mountainsBackgroundTablet.png';
import bgMountainsMobile from '../../../public/PNG/mountainsBackgroundFHD.png';
import ChargesItem from './chargesItem';


export default function ChargesSection() {
	const chargesSectionList = [
		{
			name: 'Guillermo Fariñas Contreras',
			role: 'Rector y Presidente',
			img: addingItemImg,
		},
		{
			name: 'Alesia Santacroce',
			role: 'Vicepresidente',
			img: emptyAddingImg,
		},
		{
			name: 'José Antonio De Oliveira',
			role: 'Vocal Nacional',
			img: emptyAddingImg,
		},
		{
			name: 'Marianna Moreno',
			role: 'Vocal Internacional',
			img: emptyAddingImg,
		},
		{
			name: 'Rodrigo Farías',
			role: '',
			img: emptyAddingImg,
		},
		{
			name: 'José Ignacio Arcaya',
			role: '',
			img: emptyAddingImg,
		},
	];

	return (
		<div className="relative w-screen h-auto bg-light-gray">
			<Image
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
			/>
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
