'use client';
import { Card, CardContent } from '@/components/ui/card';
import GreenBoy from '../../../public/PNG/GreenBoy.png';
import YellowGirl from '../../../public/PNG/YellowGirl.png';
import BlueBoy from '../../../public/PNG/BlueBoy.png';
import RouteComponent from './RouteComponent';

export default function RoutesSection() {
	const routesList = [
		{
			title: 'LIDERAZGO Educativo',
			details:
				'Descrubre cómo inspirar y guias a tus estudiantes hacia el éxito, fomentando un ambiente de respeto y colaboración',
			highlight:
				'Aprende técnicas para ser un modelo a seguir y un líder educativo',
			bg: 'bg-green-300',
			img: GreenBoy,
		},
		{
			title: 'GRUPOS Exitosos',
			details:
				'Domina el arte de dirigir y organizar grupos en el entorno educativo',
			highlight:
				'Aprende a manejar dinámicas de grupo, resolver conflictos y promover la cooperación entre los estudiantes',
			bg: 'bg-orange-400',
			img: YellowGirl,
		},
		{
			title: 'SOLUCIONES Proactivas',
			details:
				'Aprende a identificar y abordar situaciones desafiantes en el aula con confianza y creatividad',
			highlight:
				'Descubre estratedias para convertir los retos en oportunidades de aprendizaje',
			bg: 'bg-indigo-900',
			img: BlueBoy,
		},
	];
	return (
		<Card className="border-none">
			<CardContent className="flex flex-col items-center justify-around h-auto py-20 space-y-8 rounded-8xl">
				{routesList.map((route, index) => (
					<RouteComponent
						key={index}
						{...route}
					/>
				))}
			</CardContent>
		</Card>
	);
}
