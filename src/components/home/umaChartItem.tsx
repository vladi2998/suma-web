'use client';
import Image from 'next/image';
import yellowRoundedImg from '../../../public/WEBP/yellow-rounded.webp';
import blueRoundedImg from '../../../public/WEBP/blue-rounded.webp';
import redRoundedImg from '../../../public/WEBP/red-rounded.webp';
import { StarIcon } from '@heroicons/react/16/solid';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type UmaChartItemProps = {
	stars: number;
	name: string;
	position: string;
	img: string | StaticImport;
	master?: string;
	role: string;
	main?: boolean;
	place?: string | number;
	about?: string;
	isPage?: boolean;
};
export default function UmaChartItem({
	stars,
	name,
	position,
	img,
	master,
	role,
	main,
	place,
	about,
	isPage = false,
}: UmaChartItemProps) {
	const _stars = Array.from({ length: 5 });
	return (
		<div
			className={`relative flex flex-col items-center justify-center h-auto space-y-4`}>
			{/* Stars section */}
			{!isPage && (
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
			)}
			<div
				className={`relative z-10 ${
					main
						? isPage
							? 'w-80 xl:w-96'
							: 'w-80'
						: isPage
						? 'w-72 xl:w-[20rem]'
						: 'w-72'
				}`}>
				<Image
					src={img}
					alt={`adding-img-${name}`}
					className="w-full h-full rounded-[6rem]"
				/>
			</div>
			{isPage &&
				(place === 2 ? (
					<Image
						src={yellowRoundedImg}
						alt={`rounded-img-${name}`}
						className="absolute -top-24 -left-24 z-0"
					/>
				) : place === 1 ? (
					<Image
						src={blueRoundedImg}
						alt={`rounded-img-${name}`}
						className="absolute -top-24 -left-24 z-0"
					/>
				) : (
					<Image
						src={redRoundedImg}
						alt={`rounded-img-${name}`}
						className="absolute -left-24 z-0"
					/>
				))}
			<div
				className={`w-full flex flex-col items-center justify-center text-center z-10`}>
				{isPage && (
					<h1 className="text-6xl text-white font-bold my-0 md:my-4 lg:my-8">
						{place}
					</h1>
				)}
				<h1 className="text-2xl text-white font-bold">{name}</h1>
				<p className="text-xl text-white max-w-full">{position}</p>
				{master && <p className="text-white max-w-full">{master}</p>}
				<p className="text-white max-w-full ">{role}</p>
				{isPage && (
					<p className={`text-white max-w-auto w-80 lg:max-w-full`}>{about}</p>
				)}
			</div>
		</div>
	);
}
