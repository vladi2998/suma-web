import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { Button } from '../ui/button';
import plusIcon from '../../../public/PNG/plus-icon.png';
import bgMountains from '../../../public/PNG/mountains-fhd.png';
import imgLogo from '../../../public/PNG/sumados-logo.png';
import H1 from '../H1';
import MyLearningRouteForModal from '../connect/MyLearningRouteForModal';
import firstImgRoute from '../../../public/PNG/paperIcon2.png';
import secondImgRoute from '../../../public/PNG/penIcon2.png';
import thirdImgRoute from '../../../public/PNG/teamIcon2.png';
import fourthImgRoute from '../../../public/PNG/brainIcon2.png';
import fifthImgRoute from '../../../public/PNG/zoomIcon2.png';
import sixthImgRoute from '../../../public/PNG/folderIcon2.png';
import firstArrow from '../../../public/PNG/firstArrow.png';
import secondArrow from '../../../public/PNG/secondArrow.png';
import thirdArrow from '../../../public/PNG/thirdArrow.png';
import fourthArrow from '../../../public/PNG/fourthArrow.png';
import fifthArrow from '../../../public/PNG/fifthArrow.png';
import sixArrow from '../../../public/PNG/sixArrow.png';
import { Card } from '../ui/card';

export default function RouteModal({
	title,
	details,
	highlight,
	bg,
	img,
}: {
	title: string;
	details: string;
	highlight: string;
	img: StaticImageData;
	bg: string;
}) {
	const defaultImageRoute = [
		{
			img: firstImgRoute,
			arrowImg: firstArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: 'ml-36',
			arrowStyle: 'top-28 ml-8',
		},
		{
			img: secondImgRoute,
			arrowImg: secondArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: 'ml-16',
			arrowStyle: 'top-12 ml-8',
		},
		{
			img: thirdImgRoute,
			arrowImg: thirdArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: '',
			arrowStyle: 'bottom-4 ml-8',
		},
		{
			img: fourthImgRoute,
			arrowImg: fourthArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: '',
			arrowStyle: 'bottom-6 ml-8',
		},
		{
			img: fifthImgRoute,
			arrowImg: fifthArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: 'ml-16',
			arrowStyle: 'bottom-28 ml-8',
		},
		{
			img: sixthImgRoute,
			arrowImg: sixArrow,
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc. Nulla nec purus feugiat, vestibulum nunc id, ultricies nunc.',
			style: 'ml-36',
			arrowStyle: 'bottom-56 ml-8',
		},
	];
	return (
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
			<DialogContent className="sm:max-w-[1080px] max-h-screen bg-transparent border-none">
				<div className="flex flex-col w-full h-full overflow-y-scroll max-h-screen no-scrollbar space-y-4">
					<div
						className={`relative w-full h-full min-h-[720px] flex flex-col items-center py-8 space-y-4 overflow-hidden rounded-4xl ${bg}`}>
						<Image
							src={bgMountains}
							className="hidden object-fill md:block mt-96"
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
								<H1 className="text-white">{title}</H1>
								<div className="w-full h-full flex items-start justify-start text-white text-2xl">
									{details}
								</div>
								<div className="w-full h-full flex items-start justify-start text-white text-2xl font-bold">
									{highlight}
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
						<MyLearningRouteForModal imgList={defaultImageRoute} />
					</Card>
				</div>
			</DialogContent>
		</Dialog>
	);
}
