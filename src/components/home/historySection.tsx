'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import HstySectionImg from '../../../public/histotrySectionImg.webp';
import { Button } from '../ui/button';

export default function HistorySection() {
	return (
		<Card>
			<CardContent className="flex flex-col sm:flex-row items-center justify-around h-auto py-4">
				<div className="w-3/5 h-full flex flex-col justify-around space-y-12">
					<h1 className="text-6xl">Un poco de historia</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
						vestibulum interdum malesuada. Ut sagittis sed ipsum nec convallis.
						Sed condimentum eros justo, eget fringilla dolor volutpat sed. Sed
						iaculis arcu felis, vel lacinia mauris lobortis a. Cras hendrerit
						purus metus, nec mattis elit maximus vehicula. Ut id hendrerit eros,
						ac sagittis odio. Maecenas consectetur diam in pharetra egestas.
						Etiam varius mi lacus, sit amet vestibulum felis vulputate at. Nam
						dolor turpis, egestas non magna eu, porta scelerisque arcu. Aliquam
						dignissim egestas interdum. Maecenas dapibus a lacus nec volutpat.
						Praesent vestibulum ac nibh ac condimentum. Suspendisse cursus
						dictum metus quis rhoncus. Sed quis mauris eu ex interdum fermentum.
					</p>
					<div className="w-1/4">
						<Link href="/history/">
							<Button variant="default">Conocer más</Button>
						</Link>
					</div>
				</div>
				<div className="w-1/3 flex items-center justify-center">
					<Image
						src={HstySectionImg}
						className="w-96 h-auto my-2"
						alt={`history-section-img`}
						sizes="100vw"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
