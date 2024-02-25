import plusIcon from '../../../public/PNG/plus-icon.png';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function ForwardButton({
	text,
	callback,
}: {
	text: string;
	callback?: () => void;
}) {
	return (
		<Button
			onClick={callback}
			className="text-sm md:text-base hover:cursor-pointer hover:bg-light-green transform transition duration-300 w-full h-auto bg-dark-green flex flex-row items-center justify-between px-4 py-4 rounded-l-full rounded-r-full">
			<p className="pl-2 w-3/4 font-bold text-white text-start text- md:text-xl">
				{text}
			</p>
			<Image
				className="bg-white rounded-full p-1 w-8 h-8"
				src={plusIcon}
				alt="Picture of the author"
			/>
		</Button>
	);
}
