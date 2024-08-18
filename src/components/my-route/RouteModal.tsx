import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { Button } from '../ui/button';
import plusIcon from '../../../public/PNG/plus-icon.png';
import bgMountains from '../../../public/PNG/mountains-fhd.png';
import imgLogo from '../../../public/PNG/sumados-logo.png';
import H1 from '../H1';
import MyLearningRouteForModal from '../connect/MyLearningRouteForModal';
import { Card } from '../ui/card';
import { useContext } from 'react';
import UserContext from '@/context/UserProvider';
import { CreateMyRouteModal } from './createMyRouteModal';
import { RouteType, StepType } from './RouteComponent';

export type ImgListType = {
	img: StaticImageData;
	arrowImg: StaticImageData;
	info: string;
	style: string;
	arrowStyle: string;
};

export default function RouteModal({
	route,
	bg,
	img,
	imgList,
	fetchSpecialLearningPaths,
}: {
	route: RouteType;
	img: StaticImageData;
	bg: string;
	imgList?: ImgListType[];
	fetchSpecialLearningPaths?: () => void;
}) {
	const { user } = useContext(UserContext) as any;

	return (
		<div className="flex w-full space-x-2">
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="custom"
						size="custom">
						<p className="pl-2 w-3/4 font-bold text-white text-start md:text-xl">
							RUTA
						</p>
						<Image
							className="bg-white rounded-full p-1 w-8 h-8"
							src={plusIcon}
							alt="Picture of the author"
						/>
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[1280px] max-h-screen bg-transparent border-none">
					<div className="flex flex-col w-full h-full overflow-y-scroll max-h-screen no-scrollbar space-y-4">
						<div
							className={`relative w-full h-full min-h-[820px] flex flex-col items-center py-8 space-y-4 overflow-hidden rounded-4xl ${bg}`}>
							<Image
								src={bgMountains}
								className="hidden object-fill md:block mt-[30rem] -scale-x-100"
								alt="image-mountains-bg"
								layout="fill"
							/>
							<Image
								src={imgLogo}
								className="absolute w-48 right-4 top-0"
								alt="logo-img"
							/>
							<div className="flex flex-col md:flex-row items-center justify-around w-full h-full z-10">
								<div className="w-full h-full md:h-full md:w-2/5 flex flex-col items-center justify-center space-y-12 py-12">
									<H1 className="text-white">{route?.title}</H1>
									<div className="w-full h-full flex items-start justify-start text-white text-2xl">
										{route?.description}
									</div>
									<div className="w-full h-full flex items-start justify-start text-white text-2xl font-bold">
										{route?.highlight}
									</div>
								</div>
								<div className="hidden md:block w-full md:w-1/5 h-full flex flex-col justify-center items-center">
									<Image
										src={img}
										className="w-full mt-16"
										alt={`route-summary-section-img`}
									/>
								</div>
							</div>
						</div>
						<Card className="w-full h-auto py-4 rounded-4xl bg-transparent flex flex-col items-center justify-around border-none space-y-2">
							{imgList && (
								<MyLearningRouteForModal
									imgList={imgList}
									routeId={route.id}
								/>
							)}
						</Card>
					</div>
				</DialogContent>
			</Dialog>

			{user?.is_teacher && user?.user?.is_staff && (
				<CreateMyRouteModal
					learning_path={route}
					fetchSpecialLearningPaths={fetchSpecialLearningPaths}
				/>
			)}
		</div>
	);
}
