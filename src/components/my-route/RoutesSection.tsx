'use client';
import { Card, CardContent } from '@/components/ui/card';
import GreenBoy from '../../../public/PNG/GreenBoy.png';
import YellowGirl from '../../../public/PNG/YellowGirl.png';
import BlueBoy from '../../../public/PNG/BlueBoy.png';
import RouteComponent from './RouteComponent';
import { useEffect, useState } from 'react';
import axiosConfigInstance from '@/config/axiosCofig';

export default function RoutesSection() {
	const [specialLearningPaths, setSpecialLearningPaths] = useState<any[]>([]);

	useEffect(() => {
		const images = [GreenBoy, YellowGirl, BlueBoy];
		const backgroundColors = [
			'bg-super-light-green',
			'bg-orange-400',
			'bg-indigo-900',
		];

		axiosConfigInstance
			.get('/learning_paths?is_special=true')
			.then((response: any) => {
				setSpecialLearningPaths(
					response.data.results.slice(0, 3).map((item: any, index: number) => {
						return {
							title: item.title,
							details: item.description ?? '',
							highlight: item.highlight ?? '',
							bg: backgroundColors[index],
							img: images[index],
							steps: item.steps,
						};
					})
				);
			})
			.catch((error) => {
				console.error('There was an error!', error);
			});
	}, []);

	return (
		<Card className="border-none">
			<CardContent className="flex flex-col items-center justify-around h-auto py-20 space-y-8 rounded-8xl">
				{specialLearningPaths.map((route, index) => (
					<RouteComponent
						key={index}
						{...route}
					/>
				))}
			</CardContent>
		</Card>
	);
}
