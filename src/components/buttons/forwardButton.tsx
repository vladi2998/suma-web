import { ArrowRightIcon } from '@heroicons/react/16/solid';

export default function ForwardButton({
	text,
	callback,
}: {
	text: string;
	callback: () => void;
}) {
	return (
		<div
			onClick={callback}
			className="hover:cursor-pointer hover:scale-105 transform transition duration-300 w-full h-auto bg-dark-green flex flex-row items-center justify-between px-4 py-4 rounded-l-full rounded-r-full">
			<p className="pl-2 w-3/4 font-bold">{text}</p>
			<ArrowRightIcon
				color="rgb(20 83 45)"
				className="w-10 p-2 flex justify-center items-center rounded-full bg-white"
			/>
		</div>
	);
}
