import Image, { StaticImageData } from 'next/image';
import bgMountains from '../../../public/PNG/mountains-fhd.png';
import imgLogo from '../../../public/PNG/sumados-logo.png';
import H1 from '../H1';
import RouteModal from './RouteModal';
export default function RouteComponent({
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
	key: number;
}) {
	return (
		<div
			className={`relative w-full h-full min-h-96 flex flex-col items-center py-8 space-y-4 overflow-hidden rounded-4xl ${bg}`}>
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
