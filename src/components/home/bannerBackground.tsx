'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import BannerImg1 from '../../../public/JPG/banner-img-1.jpg';
import BannerImg2 from '../../../public/JPG/banner-img-2.jpg';
import BannerImg3 from '../../../public/JPG/banner-img-3.jpg';
import BannerImg4 from '../../../public/JPG/banner-img-4.jpg';
import BannerImg5 from '../../../public/JPG/banner-img-5.jpg';

export default function BannerBackground() {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

	const imgList = [BannerImg1, BannerImg2, BannerImg3, BannerImg4, BannerImg5];

	return (
		<div className="w-full h-full hidden md:flex items-start justify-center relative">
			<p className="text-white font-bold text-5xl mx-auto my-4 absolute z-10">
				¡La UMA son sus egresados!
			</p>
			<Carousel
				className="w-full max-w-full relative"
				plugins={[plugin.current]}>
				<CarouselContent>
					{imgList.map((img, index) => (
						<CarouselItem key={index}>
							<div>
								<Card>
									<CardContent className="flex items-center justify-center w-screen h-screen relative">
										<Image
											src={img}
											alt={`banner-img-${index}`}
											fill
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="w-16 h-16 ml-16 z-10" />
				<CarouselNext className="w-16 h-16 mr-16 z-10" />
			</Carousel>
		</div>
	);
}
