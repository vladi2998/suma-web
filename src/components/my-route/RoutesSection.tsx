'use client';
import { Card, CardContent } from '@/components/ui/card';
import CristobalLaptop from '../../../public/PNG/cristobal-laptop.png';
import OlgaCelular from '../../../public/PNG/olga-celular.png';
import AlexCelular from '../../../public/PNG/alex-celular.png';
import RouteComponent from './RouteComponent';
import { useEffect, useState } from 'react';
import axiosConfigInstance from '@/config/axiosCofig';

export default function RoutesSection() {
	const [specialLearningPaths, setSpecialLearningPaths] = useState<any[]>([]);

	const fetchSpecialLearningPaths = () => {
		const images = [CristobalLaptop, OlgaCelular, AlexCelular];
		const backgroundColors = ['bg-super-light-green', 'bg-blue', 'bg-red'];

		axiosConfigInstance
			.get('/learning_paths?is_special=true')
			.then((response: any) => {
				setSpecialLearningPaths(
					response.data.results.slice(0, 3).map((item: any, index: number) => {
						return {
							title: item.title,
							details: item.description ?? '',
							description: item.description ?? '',
							highlight: item.highlight ?? '',
							bg: backgroundColors[index],
							img: images[index],
							steps: item.steps,
							id: item.id,
						};
					})
				);
			})
			.catch((error) => {
				console.error('There was an error!', error);
			});
	};

	useEffect(() => {
		fetchSpecialLearningPaths();
	}, []);

	return (
		<Card className="border-none">
			<CardContent className="flex flex-col items-center justify-around h-auto py-20 space-y-8 rounded-8xl">
				{specialLearningPaths.map((route, index) => (
					<RouteComponent
						key={index}
						route={route}
						bg={route.bg}
						img={route.img}
						fetchSpecialLearningPaths={fetchSpecialLearningPaths}
					/>
				))}
			</CardContent>
		</Card>
	);
}
