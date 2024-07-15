import { Button } from '../ui/button';
import Loader from '../loader';
import { ArrowLeftCircle } from 'lucide-react';

export default function BackButton({
	text,
	callback,
	isLoading,
}: {
	text: string;
	callback?: () => void;
	isLoading?: boolean;
}) {
	return (
		<Button
			onClick={callback}
			className="text-sm md:text-base hover:cursor-pointer hover:bg-slate-100/20 transform transition duration-300 w-full h-auto bg-transparent flex flex-row items-center justify-between px-4 py-3 rounded-l-full rounded-r-full border">
			{isLoading ? (
				<Loader />
			) : (
				<ArrowLeftCircle className="w-10 h-10 text-white" />
			)}
			<p className="pl-2 w-full font-bold text-white text-start text- md:text-xl">
				{isLoading ? 'Cargando...' : text}
			</p>
		</Button>
	);
}
