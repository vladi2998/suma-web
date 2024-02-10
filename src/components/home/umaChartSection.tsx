'use client';

import H1 from '../H1';
import UmaChartItem from './umaChartItem';

type UmaChartSectionProps = {
	isPage?: boolean;
};

export default function UmaChartSection({
	isPage = false,
}: UmaChartSectionProps) {
	const umaItems = [
		{
			stars: 3,
			name: 'José De Oliveira',
			position: 'Lic en Comunicación Social ',
			// master: 'Maestrando en Innovación Educativa',
			role: 'Project Manager',
			main: false,
			place: 2,
			about:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		},
		{
			stars: 4,
			name: 'José De Oliveira',
			position: 'Lic en Comunicación Social',
			// master: 'Maestrando en Innovación Educativa',
			role: 'Project Manager',
			main: true,
			place: 1,
			about:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		},
		{
			stars: 5,
			name: 'José De Oliveira',
			position: 'Lic en Comunicación Social',
			// master: 'Maestrando en Innovación Educativa',
			role: 'Project Manager',
			main: false,
			place: 3,
			about:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
		},
	];

	return (
		<div
			className={`w-full h-auto flex flex-col items-center bg-gradient-to-r from-dark-green to-light-green py-12 space-y-8`}>
			{isPage && (
				<div className="w-full flex items-start">
					<H1 className="text-white ml-20">Cuadros UMA</H1>
				</div>
			)}

			<div
				className={`w-full h-auto flex flex-col lg:flex-row ${
					isPage ? 'justify-around space-y-12' : 'justify-center lg:space-x-12'
				} items-center`}>
				{umaItems.map((item, idx) => (
					<UmaChartItem
						{...item}
						key={idx}
						isPage={isPage}
					/>
				))}
			</div>
			{!isPage && (
				<div className="w-full flex items-start">
					<H1 className="text-white ml-20">Cuadros UMA</H1>
				</div>
			)}
		</div>
	);
}
