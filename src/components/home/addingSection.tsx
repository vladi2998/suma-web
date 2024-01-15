'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import AddingItem from './addingItem';
import H1 from '../H1';
import ForwardButton from '../buttons/forwardButton';

export default function AddingSection() {
	const addingSectionList = [
		{
			name: 'Sasha Bograd',
			career: 'Lic. Comunicacion Social',
			master: 'Master en Neuromarketing',
			specialist: 'Especialista en diseño Gráfico',
			href: '/',
		},
		{
			name: 'Sasha Bograd',
			career: 'Lic. Comunicacion Social',
			master: 'Master en Neuromarketing',
			specialist: 'Especialista en diseño Gráfico',
			href: '/',
		},
		{
			name: 'Sasha Bograd',
			career: 'Lic. Comunicacion Social',
			master: 'Master en Neuromarketing',
			specialist: 'Especialista en diseño Gráfico',
			href: '/',
		},
		{
			name: 'Sasha Bograd',
			career: 'Lic. Comunicacion Social',
			master: 'Master en Neuromarketing',
			specialist: 'Especialista en diseño Gráfico',
			href: '/',
		},
	];

	return (
		<Card>
			<CardContent className="flex flex-col items-center justify-around text-center h-auto py-4">
				<H1>Sumemos</H1>
				<div className="w-full h-auto flex-wrap my-2 md:flex md:flex-row justify-around items-center md:space-x-2 space-y-4">
					{addingSectionList.map((item, idx) => (
						<AddingItem
							{...item}
							key={idx}
						/>
					))}
				</div>
				<div className="w-full flex justify-end my-2">
					<Link href='/connect/' className="w-96 flex items-center justify-center">
						<ForwardButton text="Ver más" />
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
