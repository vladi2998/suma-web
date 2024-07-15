'use client';
import RouteStepSection from '@/components/my-route/RouteStepSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { getLearningPathById } from '@/utils/learning_paths';
import { useEffect } from 'react';

type Step = {
	value: string;
	label: string;
};

export default function RouteById({ params }: { params: { routeId: string } }) {
	const steps = [
		{ value: 'step-1', label: 'Paso 1' },
		{ value: 'step-2', label: 'Paso 2' },
		{ value: 'step-3', label: 'Paso 3' },
		{ value: 'step-4', label: 'Paso 4' },
		{ value: 'step-5', label: 'Paso 5' },
		{ value: 'step-6', label: 'Paso 6' },
	];

	const getRouteData = async () => {
		try {
			const response = getLearningPathById(params.routeId);
			console.log(response);
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	useEffect(() => {
		getRouteData();
	}, []);

	return (
		<div className="relative w-screen h-full md:h-screen flex flex-col items-center">
			<div className="w-11/12 flex justify-end text-xl font-bold">
				Route: {params.routeId}
			</div>
			<Tabs
				defaultValue="account"
				className="w-11/12 h-auto">
				<TabsList className="w-full flex flex-col md:flex-row items-center justify-around">
					{steps.map((item: Step, idx: number) => (
						<TabsTrigger
							key={idx}
							className="w-full"
							value={item.value}>
							{item.label}
						</TabsTrigger>
					))}
				</TabsList>
				<TabsContent value="step-1">{<RouteStepSection />}</TabsContent>
			</Tabs>
		</div>
	);
}
