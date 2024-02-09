import Image from 'next/image';
import H1 from '../H1';
import learningRouteBgImg from '../../../public/PNG/myLearningRoute.png';
import { CameraIcon } from '@heroicons/react/16/solid';

export default function MyLearningRouteSection() {
	return (
		<div className="relative w-full h-72 md:h-96 lg:h-132 xl:h-screen md:flex items-start justify-center mt-2">
			<H1 className="ml-8 mb-8">Ruta de Aprendizaje</H1>
			<div className="w-full hidden md:block">
				<Image
					src={learningRouteBgImg}
					className="relative mt-0 md:mt-36 xl:mt-0"
					alt={`banner-img-history-page`}
					layout="fill"
				/>
				<CameraIcon
					className="w-12 lg:w-16 xl:w-32 h-auto border bg-white border-dark-gray rounded-full p-4 absolute   md:left-12 md:bottom-12 lg:left-4 xl:left-4 lg:bottom-1/4 xl:bottom-1/2"
					color="rgb(226 232 240)"
				/>
				<CameraIcon
					className="w-12 lg:w-20 xl:w-32 h-auto border bg-white border-dark-gray rounded-full p-4 absolute md:left-28 md:bottom-0 lg:left-24 xl:left-32 lg:bottom-24 xl:bottom-1/3 2xl:left-48"
					color="rgb(226 232 240)"
				/>
				<CameraIcon
					className="w-12 lg:w-32 xl:w-32 2xl:w-36 h-auto border bg-white border-dark-gray rounded-full p-4 absolute md:left-52 md:bottom-24 lg:left-48 xl:left-72 lg:bottom-1/3 xl:top-1/4 2xl:left-96"
					color="rgb(226 232 240)"
				/>
				<CameraIcon
					className="w-12 md:w-20 lg:w-36 xl:w-32 2xl:w-48 h-auto border bg-white border-dark-gray rounded-full p-4 absolute md:left-1/3 md:-bottom-12 lg:left-96 xl:left-128 lg:bottom-4 xl:bottom-48 2xl:left-1/3"
					color="rgb(226 232 240)"
				/>
				<CameraIcon
					className="w-12 md:w-24 lg:w-36 xl:w-48 2xl:w-64 h-auto border bg-white border-dark-gray rounded-full p-4  absolute md:right-80 md:bottom-24 lg:right-96 xl:right-128 lg:top-60 xl:top-36 2xl:right-132"
					color="rgb(226 232 240)"
				/>
				<CameraIcon
					className="w-12 md:w-32 lg:w-48 xl:w-64 2xl:w-72 h-auto border bg-white border-dark-gray rounded-full p-4 absolute md:right-16 md:bottom-16 lg:right-20 xl:right-24 lg:top-72 xl:top-36 2xl:right-32 2xl:top-48"
					color="rgb(226 232 240)"
				/>
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
