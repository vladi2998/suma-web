'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import HstySectionImg from '../../../public/histotrySectionImg.webp';
import { Button } from '../ui/button';
import AddingItem from './addingItem';

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
				<h1 className="w-full text-6xl my-2">Sumemos</h1>
				<div className="w-full h-auto flex justify-around items-center space-x-2">
					{addingSectionList.map((item, idx) => (
						<AddingItem {...item} />
					))}
				</div>
			</CardContent>
		</Card>
	);
}
