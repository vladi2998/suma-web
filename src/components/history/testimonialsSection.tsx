import emptyAddingImg from '../../../public/PNG/profile_bg.png';

import { Card, CardContent } from '../ui/card';
import TestimonialsItem from './testimonialsItem';

export default function TestimonialsSection() {
	const testimonialsList = [
		{
			name: 'Alejandra López',
			career: 'Lic. Comuniación Social',
			img: emptyAddingImg,
			testimonial:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat',
		},
		{
			name: 'Pedro Pérez',
			career: 'Lic. Comuniación Social',
			img: emptyAddingImg,
			testimonial:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat',
		},
	];
	return (
		<Card className="border-none">
			<CardContent className="flex flex-col md:flex-row items-center justify-around h-auto py-20">
				<div className="w-full h-full flex flex-col justify-center items-center space-y-12">
					<h1 className="w-full text-4xl md:text-7xl font-bold text-center">
						Testimonios
					</h1>
					<div className="w-full flex flex-col space-y-12">
						{testimonialsList.map((item, idx) => (
							<TestimonialsItem
								{...item}
								index={idx}
								key={idx}
							/>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
