import Image from 'next/image';
import H1 from '../H1';
import { Card, CardContent } from '../ui/card';
import addingItemImg from '../../../public/WEBP/addingItemImg.webp';

type TestimonialsItemProps = {
	name: string;
	career: string;
	testimonial: string;
	index: number;
};
export default function TestimonialsItem({
	name,
	career,
	testimonial,
	index,
}: TestimonialsItemProps) {
	return (
		<Card className="border-none">
			<CardContent
				className={`flex flex-col ${
					index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
				} items-center justify-around h-auto py-20`}>
				<div
					className={`w-full mt-2 md:mt-0 md:w-1/3 flex items-center ${
						index % 2 === 0 ? 'justify-start' : 'justify-end'
					}`}>
					<Image
						src={addingItemImg}
						className="w-96 h-auto my-2 rounded-8xl"
						alt={`history-section-img`}
						sizes="120vw"
					/>
				</div>
				<div className="w-full md:w-3/5 h-full flex flex-col justify-around space-y-4 md:space-y-12">
					<div className="w-full flex flex-col md:flex-row items-center justify-between space-y-4">
						<div className="w-full md:w-1/2 text-center md:text-start">
							<h1 className="text-3xl font-bold">{name}</h1>
							<h2 className="text-2xl">{career}</h2>
						</div>
					</div>
					<p className="text-base md:text-2xl">{testimonial}</p>
				</div>
			</CardContent>
		</Card>
	);
}
