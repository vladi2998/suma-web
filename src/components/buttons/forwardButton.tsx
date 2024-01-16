import plusIcon from '../../../public/PNG/plus-icon.png';
import Image from 'next/image';

export default function ForwardButton({
	text,
	callback,
}: {
	text: string;
	callback?: () => void;
}) {
	return (
		<div
			onClick={callback}
			className="text-sm md:text-base hover:cursor-pointer hover:scale-105 transform transition duration-300 w-full h-auto bg-light-green flex flex-row items-center justify-between px-4 py-4 rounded-l-full rounded-r-full">
			<p className="pl-2 w-3/4 font-bold text-white text-start text- md:text-xl">
				{text}
			</p>
			<Image
				className="bg-white rounded-full p-1 w-8 h-8"
				src={plusIcon}
				alt="Picture of the author"
			/>
		</div>
	);
}
