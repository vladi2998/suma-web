import Image from 'next/image';
import H1 from '../H1';
import bgMountains from '../../../public/PNG/mountains.png';

export default function ChargesSection() {
	return (
		<div className="w-full h-[42rem] relative">
			<h1 className="w-full text-4xl md:text-7xl font-bold text-center">
				¿Quiénes están a cargo?
			</h1>
			<Image
				src={bgMountains}
				className="object-fill"
				alt="image-mountains-bg"
				layout="fill"
			/>
		</div>
	);
}
