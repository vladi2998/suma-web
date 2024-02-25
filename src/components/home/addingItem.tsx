'use client';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { UserProfileModal } from '../connect/userProfileModal';

type AddingProps = {
	name: string;
	career: string;
	master?: string;
	specialist?: string;
	href: string;
	img: string | StaticImport;
};
export default function AddingItem({
	name,
	career,
	master,
	specialist,
	href,
	img
}: AddingProps) {
	return (
		<div className="flex flex-col w-80 xl:w-96 h-auto space-y-12 mb-8">
			<div className="w-full h-6/12 relative">
				<Image
					src={img}
					alt={`adding-img-${name}`}
					className="w-full h-full rounded-[8rem]"
				/>
			</div>
			<div className="w-full h-5/12 flex flex-col items-start text-start">
				<h1 className="text-2xl font-bold">{name}</h1>
				<p>{career}</p>
				<p>{master}</p>
				<p>{specialist}</p>
			</div>
			<div className="w-full h-1/12 flex items-center justify-center">
				<UserProfileModal />
			</div>
		</div>
	);
}
