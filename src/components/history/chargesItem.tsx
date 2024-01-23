'use client';
import Image from 'next/image';
import addingItemImg from '../../../public/WEBP/addingItemImg.webp';

type AddingProps = {
	name: string;
	role: string;
};
export default function ChargesItem({ name, role }: AddingProps) {
	return (
		<div className="flex flex-col w-80 xl:w-96 h-auto space-y-12 mb-8">
			<div className="w-full h-5/12 flex flex-col items-center text-center">
				<h1 className="text-3xl font-bold">{name}</h1>
				<p className="text-2xl">{role}</p>
			</div>
			<div className="w-full h-6/12 relative">
				<Image
					src={addingItemImg}
					alt={`adding-img-${name}`}
					className="w-full h-full rounded-[8rem]"
				/>
			</div>
		</div>
	);
}
