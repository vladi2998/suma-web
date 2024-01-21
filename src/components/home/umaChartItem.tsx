'use client';
import Image from 'next/image';
import umaChartItemImg from '../../../public/WEBP/umaChartItemImg.webp';
import { StarIcon } from '@heroicons/react/16/solid';

type AddingProps = {
	stars: number;
	name: string;
	position: string;
	role: string;
	main?: boolean;
};
export default function UmaChartItem({
	stars,
	name,
	position,
	role,
	main,
}: AddingProps) {
	const _stars = Array.from({ length: 5 });
	return (
		<div
			className={`flex flex-col items-center justify-center w-auto h-auto space-y-4`}>
			{/* Stars section */}
			{/* <div className="w-full h-1/12 flex items-center justify-start">
				{_stars.map((_, idx) => {
					return idx < stars ? (
						<StarIcon
							key={idx}
							className="w-16"
							color="#FFF"
						/>
					) : (
						<div
							className="w-16 bg-light-green"
							key={idx}
						/>
					);
				})}
			</div> */}
			<div className={`relative ${main ? 'w-96' : 'w-80'}`}>
				<Image
					src={umaChartItemImg}
					alt={`adding-img-${name}`}
					className="w-full h-full rounded-[6rem]"
				/>
			</div>
			<div
				className={`w-full flex flex-col items-center justify-center text-center`}>
				<h1 className="text-2xl text-white font-bold">{name}</h1>
				<p className="text-white max-w-full">{position}</p>
				<p className="text-white max-w-full">{role}</p>
			</div>
		</div>
	);
}
