'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import addingItemImg from '../../../public/addingItemImg.webp';

type AddingProps = {
	name: string;
	career: string;
	master: string;
	specialist: string;
	href: string;
};
export default function AddingItem({
	name,
	career,
	master,
	specialist,
	href,
}: AddingProps) {
	return (
		<Card>
			<div className="flex flex-col w-auto h-auto space-y-12 mb-8">
				<div className="w-full h-6/12 relative">
					<Image
						src={addingItemImg}
						alt={`adding-img-${name}`}
                        className='w-full rounded-t-lg'
					/>
				</div>
				<div className="w-full h-5/12 flex flex-col items-center text-center">
					<h1 className='text-2xl font-bold'>{name}</h1>
					<p>{career}</p>
					<p>{master}</p>
					<p>{specialist}</p>
				</div>
				<div className="w-full h-1/12 flex items-center justify-center">
					<Link href={href}>
						<Button variant="default">Sumemos</Button>
					</Link>
				</div>
			</div>
		</Card>
	);
}
