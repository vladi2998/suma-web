import Image from 'next/image';
import H1 from '../H1';
import learningRouteBgImg from '../../../public/PNG/myLearningRoute.png';
import { CameraIcon } from '@heroicons/react/16/solid';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '../ui/hover-card';

const HoverComponent = ({
	img,
	info,
	key,
}: {
	img: any;
	info: string;
	key: number;
}) => {
	return (
		<HoverCard key={key}>
			<HoverCardTrigger asChild>
				<div
					className="w-24 h-24 lg:w-40 lg:h-40 bg-white rounded-full flex flex-col w-auto items-center justify-center hover:cursor-pointer"
					key={key}>
					<Image
						src={img}
						alt={`img-${key}`}
						className=""
					/>
				</div>
			</HoverCardTrigger>
			<HoverCardContent className="w-96">{info}</HoverCardContent>
		</HoverCard>
	);
};
export default function MyLearningRouteForModal({
	imgList,
}: {
	imgList: any[];
}) {
	return (
		<div className="relative w-full h-auto sm:h-72 md:h-96 lg:h-132 xl:h-screen md:flex items-start justify-center mt-2">
			<div className="w-full hidden md:block">
				<Image
					src={learningRouteBgImg}
					className="relative mt-0 md:mt-36 xl:mt-0"
					alt={`banner-img-history-page`}
					layout="fill"
				/>
				<div className="w-24 lg:w-16 xl:w-32 h-auto rounded-full p-4 absolute   md:left-12 md:bottom-12 lg:left-4 xl:left-4 lg:bottom-1/4 xl:bottom-1/2">
					{imgList[0] ? (
						<HoverComponent
							img={imgList[0].img}
							info={imgList[0].info}
							key={0}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
				<div className="w-24 lg:w-20 xl:w-32 h-auto rounded-full p-4 absolute md:left-28 md:bottom-0 lg:left-24 xl:left-32 lg:bottom-24 xl:bottom-1/3 2xl:left-36">
					{imgList[1] ? (
						<HoverComponent
							img={imgList[1].img}
							info={imgList[1].info}
							key={1}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
				<div className="w-24 lg:w-32 xl:w-32 2xl:w-36 h-auto rounded-full p-4 absolute md:left-52 md:bottom-24 lg:left-48 xl:left-64 lg:bottom-1/3 xl:top-1/4 2xl:left-64">
					{imgList[2] ? (
						<HoverComponent
							img={imgList[2].img}
							info={imgList[2].info}
							key={2}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
				<div className="w-12 md:w-20 lg:w-36 xl:w-32 2xl:w-48 h-auto rounded-full p-4 absolute md:left-1/3 md:-bottom-12 lg:left-96 xl:left-96 lg:bottom-4 xl:bottom-48 2xl:left-1/3">
					{imgList[3] ? (
						<HoverComponent
							img={imgList[4].img}
							info={imgList[4].info}
							key={4}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
				<div className="w-12 md:w-24 lg:w-36 xl:w-48 2xl:w-64 h-auto rounded-full p-4 absolute md:right-80 md:bottom-24 lg:right-96 xl:right-96 lg:top-60 xl:top-24 2xl:right-96">
					{imgList[4] ? (
						<HoverComponent
							img={imgList[4].img}
							info={imgList[4].info}
							key={4}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
				<div className="w-12 md:w-32 lg:w-48 xl:w-64 2xl:w-72 h-auto rounded-full p-4 absolute md:right-16 md:bottom-16 lg:right-20 xl:right-16 lg:top-72 xl:top-36 2xl:right-10 2xl:top-48">
					{imgList[5] ? (
						<HoverComponent
							img={imgList[5].img}
							info={imgList[5].info}
							key={5}
						/>
					) : (
						<CameraIcon
							color="rgb(226 232 240)"
							className="p-4 border bg-white border-dark-gray rounded-full"
						/>
					)}
				</div>
			</div>
			<div className="w-full md:hidden flex flex-wrap justify-around items-center">
				{[1, 2, 3, 4, 5, 6].map((item, idx) => (
					<div
						className="flex flex-col w-auto items-center justify-center"
						key={idx}>
						<CameraIcon
							className="w-24 p-4 border bg-white border-dark-gray rounded-full"
							color="rgb(226 232 240)"
						/>{' '}
						<p className="text-lg font-bold">{item}</p>
					</div>
				))}
			</div>
		</div>
	);
}
