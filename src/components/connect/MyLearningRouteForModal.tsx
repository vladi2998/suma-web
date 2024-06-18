import Image from 'next/image';
import learningRouteTitleImg from '../../../public/PNG/LearningRoutetitle.png';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '../ui/hover-card';
import { ImgListType } from '../my-route/RouteModal';

const HoverComponent = ({
	img,
	arrowImg,
	info,
	key,
	style,
	arrowStyle,
}: {
	img: any;
	arrowImg: any;
	info: string;
	key: number;
	style: string;
	arrowStyle?: string;
}) => {
	return (
		<HoverCard key={key}>
			{/* CHANGE TO H-36 TO MAKE ALL THE SAME, BUT IT WILL NEED TO UPDATE ARROWS STYLES */}
			<div className="flex w-full h-auto items-center">
				<HoverCardTrigger asChild>
					<Image
						src={img}
						alt={`img-${key}`}
						className={`${style} h-36 w-32 hover:cursor-pointer`}
					/>
				</HoverCardTrigger>
				<Image
					src={arrowImg}
					alt={`arrow-img-${key}`}
					className={`${arrowStyle} relative`}
				/>
			</div>
			<HoverCardContent className="w-96">{info}</HoverCardContent>
		</HoverCard>
	);
};
export default function MyLearningRouteForModal({
	imgList,
}: {
	imgList: ImgListType[];
}) {
	return (
		<div className="hidden lg:flex relative w-full items-center justify-center bg-white/50 rounded-4xl">
			<div className="ml-4 w-1/2 h-auto flex flex-col space-y-2 opacity-100">
				{imgList.map((item, idx) => (
					<HoverComponent
						key={idx}
						img={item.img}
						arrowImg={item.arrowImg}
						info={item.info}
						style={item.style}
						arrowStyle={item.arrowStyle}
					/>
				))}
			</div>
			<div>
				<Image
					src={learningRouteTitleImg}
					alt={`learning-route-title-img`}
					className="relative w-128 bottom-24 right-12 opacity-100"
				/>
			</div>
		</div>
	);
}
