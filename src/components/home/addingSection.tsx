'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import AddingItem from './addingItem';
import H1 from '../H1';
import ForwardButton from '../buttons/forwardButton';

export default function AddingSection() {
	const addingSectionList = [
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
		{
			name: 'José De Oliveira',
			career: 'Lic en Comunicación Social Maestrando en Innovación Educativa ',
			specialist: 'Project Manager',
			href: '/',
		},
	];

	return (
		<Card>
			<CardContent className="flex flex-col items-center justify-around text-center h-auto py-4">
				<H1>Sumemos</H1>
				<div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
					{addingSectionList.map((item, idx) => (
						<AddingItem
							{...item}
							key={idx}
						/>
					))}
				</div>
				<div className="w-full flex justify-end my-2">
					<Link
						href="/connect/"
						className="w-96 flex items-center justify-center">
						<ForwardButton text="Ver más" />
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
