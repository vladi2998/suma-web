'use client';

import H1 from '../H1';
import UmaChartItem from './umaChartItem';

export default function UmaChartSection() {
	const umaItems = [
		{
			stars: 3,
			name: 'Sasha Bograd',
			position: 'Position',
			role: 'Role',
		},
		{
			stars: 4,
			name: 'Sasha Bograd',
			position: 'Position',
			role: 'Role',
		},
		{
			stars: 5,
			name: 'Sasha Bograd',
			position: 'Position',
			role: 'Role',
		},
	];

	return (
		<div className="w-full h-auto flex flex-col items-center bg-light-green py-8 space-y-8">
			<H1 className='text-white ml-10'>Cuadros UMA</H1>
			<div className="w-full h-auto flex flex-wrap md:flex-row justify-around items-center">
				{umaItems.map((item, idx) => (
					<UmaChartItem
						{...item}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}
