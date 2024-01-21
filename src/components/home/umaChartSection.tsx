'use client';

import H1 from '../H1';
import UmaChartItem from './umaChartItem';

export default function UmaChartSection() {
	const umaItems = [
		{
			stars: 3,
			name: 'José De Oliveira',
			position:
				'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			role: 'Project Manager',
			main: false,
		},
		{
			stars: 4,
			name: 'José De Oliveira',
			position:
				'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			role: 'Project Manager',
			main: true,
		},
		{
			stars: 5,
			name: 'José De Oliveira',
			position:
				'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			role: 'Project Manager',
			main: false,
		},
	];

	return (
		<div className="w-full h-auto flex flex-col items-center bg-gradient-to-r from-dark-green to-light-green py-12 space-y-8">
			<div className="w-full h-auto flex flex-wrap md:flex-row justify-center items-center md:space-x-12">
				{umaItems.map((item, idx) => (
					<UmaChartItem
						{...item}
						key={idx}
					/>
				))}
			</div>
			<H1 className="text-white ml-20">Cuadros UMA</H1>
		</div>
	);
}
