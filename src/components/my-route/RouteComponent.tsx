import Image, { StaticImageData } from 'next/image';
import bgMountains from '../../../public/PNG/mountains-fhd.png';
import imgLogo from '../../../public/PNG/sumados-logo.png';
import H1 from '../H1';
import RouteModal, { ImgListType } from './RouteModal';
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

export type StepType = {
	description: string;
	img: StaticImageData;
	arrowImg: StaticImageData;
	style: string;
	arrowStyle: string;
};

export default function RouteComponent({
	title,
	details,
	highlight,
	bg,
	img,
	steps,
}: {
	title: string;
	details: string;
	highlight: string;
	img: StaticImageData;
	bg: string;
	key: number;
	steps: StepType[];
}) {
	const imagesRoutes: StaticImageData[] = [
		firstImgRoute,
		secondImgRoute,
		thirdImgRoute,
		fourthImgRoute,
		fifthImgRoute,
		sixthImgRoute,
	];
	const arrows: StaticImageData[] = [
		firstArrow,
		secondArrow,
		thirdArrow,
		fourthArrow,
		fifthArrow,
		sixArrow,
	];
	const arrowStyle: string[] = [
		'top-28 ml-8',
		'top-12 ml-8',
		'bottom-4 ml-8',
		'bottom-6 ml-8',
		'bottom-28 ml-8',
		'bottom-56 ml-8 w-full',
	];
	const imgStyle: string[] = ['ml-36', 'ml-16', '', '', 'ml-16', 'ml-36'];

	const imgList: ImgListType[] = steps?.map((step, index) => {
		return {
			img: imagesRoutes[index],
			arrowImg: arrows[index],
			info: step.description,
			style: imgStyle[index],
			arrowStyle: arrowStyle[index],
		};
	});

	return (
		<div
			className={`relative w-full h-full min-h-96 flex flex-col items-center py-8 space-y-4 overflow-hidden rounded-4xl ${bg}`}
		>
			<Image
				src={bgMountains}
				className="hidden object-fill md:block mt-64"
				alt="image-mountains-bg"
				layout="fill"
			/>
			<Image
				src={imgLogo}
				className="absolute w-48 right-4 top-0"
				alt="logo-img"
			/>
			<div className="flex flex-col md:flex-row items-center justify-around w-full h-full z-10">
				<div className="w-full h-full md:h-full md:w-2/5 flex flex-col items-center justify-around space-y-12">
					<H1 className="text-white">{title}</H1>
					<div className="w-full h-full flex items-start justify-start">
						<div className="min-w-96">
							<RouteModal
								title={title}
								details={details}
								highlight={highlight}
								img={img}
								bg={bg}
								imgList={imgList}
							/>
						</div>
					</div>
				</div>
				<div className="hidden md:block w-full md:w-1/5 h-full flex flex-col justify-center items-center">
					<Image
						src={img}
						className="w-2/3"
						alt={`route-summary-section-img`}
					/>
				</div>
			</div>
		</div>
	);
}
