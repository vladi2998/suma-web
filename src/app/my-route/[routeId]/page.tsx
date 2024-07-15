import RouteStepSection from '@/components/my-route/RouteStepSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import bgMountains from '../../../../public/PNG/mountains-fhd.png';
import Image from 'next/image';

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
	return (
		<div className="relative w-screen h-full md:h-screen flex flex-col items-center">
			{/* <Image
				src={bgMountains}
				className="hidden object-fill md:block mt-128"
				alt="image-mountains-bg"
				layout="fill"
			/> */}
			Route: {params.routeId}
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
