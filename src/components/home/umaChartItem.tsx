'use client';
import Image from 'next/image';
import umaChartItemImg from '../../../public/WEBP/umaChartItemImg.webp';
import { StarIcon } from '@heroicons/react/16/solid';

type UmaChartItemProps = {
	stars: number;
	name: string;
	position: string;
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
				className={`relative ${
					main
						? isPage
							? 'w-80 xl:w-96'
							: 'w-80'
						: isPage
						? 'w-72 xl:w-[20rem]'
						: 'w-72'
				}`}>
				<Image
					src={umaChartItemImg}
					alt={`adding-img-${name}`}
					className="w-full h-full rounded-[6rem]"
				/>
				{/* {isPage && (
					<div
						className={`absolute rounded-full -left-16 ${
							place === 1
								? 'bg-blue -top-12 p-32'
								: place === 2
								? 'bg-yellow -top-8 p-24'
								: 'bg-red -bottom-8 p-24'
						}`}
					/>
				)} */}
			</div>
			<div
				className={`w-full flex flex-col items-center justify-center text-center`}>
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
