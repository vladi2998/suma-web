import Image from 'next/image';
import bgMountains from '../../../public/PNG/mountainsBackgroundFHD.png';
import ChargesItem from './chargesItem';

export default function ChargesSection() {
	const chargesSectionList = [
		{
			name: 'Guillermo Fariñas Contreras',
			role: 'Rector y Presidente',
		},
		{
			name: 'Alesia Santacroce',
			role: 'Vicepresidente',
		},
		{
			name: 'José Antonio de Oliveira',
			role: 'Vocal Nacional',
		},
		{
			name: 'Marianna Moreno',
			role: 'Vocal Internacional',
		},
		{
			name: 'Rodrigo Farías',
			role: '',
		},
		{
			name: 'José Ignacio Arcaya',
			role: '',
		},
	];

	return (
		<div className="relative w-screen h-auto bg-light-gray">
			<Image
				src={bgMountains}
				className="hidden object-fill lg:block"
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
