'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import HstySectionImg from '../../../public/WEBP/historyImg.webp';
import { Button } from '../ui/button';
import H1 from '../H1';
import ForwardButton from '../buttons/forwardButton';

export default function ProfileSection() {
	return (
		<Card className='border-none'>
			<H1 className='ml-8'>Mi Ruta</H1>
			<CardContent className="flex flex-col md:flex-row items-center justify-around h-auto py-20">
				<div className="w-full mt-2 md:mt-0 md:w-1/3 flex items-center justify-center">
					<Image
						src={HstySectionImg}
						className="w-96 h-auto my-2 rounded-8xl"
						alt={`history-section-img`}
						sizes="120vw"
					/>
				</div>
				<div className="w-full md:w-3/5 h-full flex flex-col justify-around space-y-4 md:space-y-12">
					<div className="w-full flex flex-col md:flex-row items-center justify-between space-y-4">
						<div className="w-full md:w-1/2 text-center md:text-start">
							<h1 className="text-3xl font-bold">Carolina López</h1>
							<h2 className="text-2xl">Abogado</h2>
						</div>
						<div className="w-full md:w-1/2">
							<Link href="/connect/">
								<ForwardButton text="Editar mi ruta" />
							</Link>
						</div>
					</div>
					<p className="text-base md:text-2xl">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
						sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
						aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
						exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
						commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
						vulputate velit esse molestie consequat, vel illum dolore eu feugiat
						nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
						blandit praesent luptatum zzril delenit augue duis dolore te feu.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
