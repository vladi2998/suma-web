import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

import InstagramLogo from '../../../public/WEBP/instagramLogo.webp';
import TwtitterLogo from '../../../public/WEBP/twitterLogo.webp';
import LinkedinLogo from '../../../public/WEBP/linkedin.webp';
import facebookLogo from '../../../public/WEBP/facebookLogo.webp';
export default function SocialMediaSection() {
	const logoSize = 64;
	return (
		<Card className="border-none">
			<CardContent className="flex flex-col md:flex-row items-center justify-around h-auto py-20">
				<div className="w-full h-full flex flex-col justify-center items-center space-y-12">
					<h1 className="w-full text-4xl md:text-7xl font-bold text-center">
						Redes Sociales
					</h1>
					<div className="w-full flex flex-row justify-around items-center">
						<Link href="https://www.facebook.com/UnivMonteavila/?locale=es_LA">
							<Image
								src={facebookLogo}
								width={logoSize}
								height={logoSize}
								alt="facebookLogo"
							/>
						</Link>
						<Link href="https://www.instagram.com/monteavila/">
							<Image
								src={InstagramLogo}
								width={logoSize}
								height={logoSize}
								alt="instagramLogo"
							/>
						</Link>
						<Link href="https://twitter.com/monteavila/">
							<Image
								src={TwtitterLogo}
								width={logoSize}
								height={logoSize}
								alt="twitterLogo"
							/>
						</Link>
						<Link href="https://www.linkedin.com/school/universidad-monteavila/mycompany/">
							<Image
								src={LinkedinLogo}
								width={logoSize}
								height={logoSize}
								alt="linkedinLogo"
							/>
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
