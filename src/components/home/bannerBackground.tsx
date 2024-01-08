'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import BannerImg1 from '../../../public/banner-img-1.webp';
import BannerImg2 from '../../../public/banner-img-2.webp';
import BannerImg3 from '../../../public/banner-img-3.webp';
import BannerImg4 from '../../../public/banner-img-4.webp';
import BannerImg5 from '../../../public/banner-img-5.webp';
import BannerImg6 from '../../../public/banner-img-6.webp';
import BannerImg7 from '../../../public/banner-img-7.webp';
import BannerImg8 from '../../../public/banner-img-8.webp';
import BannerImg9 from '../../../public/banner-img-9.webp';

export default function BannerBackground() {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

	const imgList = [
		BannerImg1,
		BannerImg2,
		BannerImg3,
		BannerImg4,
		BannerImg5,
		BannerImg6,
		BannerImg7,
		BannerImg8,
		BannerImg9,
	];

	return (
		<div className="w-full h-full hidden md:flex items-center justify-center">
			<p className="text-white font-bold text-8xl m-auto absolute">Sumados</p>
			<Carousel
				className="w-full max-w-full relative -z-10"
				plugins={[plugin.current]}>
				<CarouselContent>
					{imgList.map((img, index) => (
						<CarouselItem key={index}>
							<div>
								<Card>
									<CardContent className="flex items-center justify-center h-screen relative">
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
			</Carousel>
		</div>
	);
}
