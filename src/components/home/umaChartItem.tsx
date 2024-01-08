'use client';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import umaChartItemImg from '../../../public/umaChartItemImg.webp';
import { StarIcon } from '@heroicons/react/16/solid';

type AddingProps = {
	stars: number;
	name: string;
	position: string;
	role: string;
};
export default function UmaChartItem({
	stars,
	name,
	position,
	role,
}: AddingProps) {
	const _stars = Array.from({ length: 5 });
	return (
		<div className="flex flex-col items-start w-auto h-auto space-y-4">
			<div className="w-full h-1/12 flex items-center justify-start">
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
			</div>
			<div className="w-96 h-6/12 relative">
				<Image
					src={umaChartItemImg}
					alt={`adding-img-${name}`}
					className="w-full rounded-lg"
				/>
			</div>
			<div className="w-full h-3/12 flex flex-col">
				<h1 className="text-2xl text-white font-bold">{name}</h1>
				<p className="text-white">
					{position}/{role}
				</p>
			</div>
		</div>
	);
}
