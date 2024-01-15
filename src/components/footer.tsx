'use client';
import Image from 'next/image';
import Link from 'next/link';
import InstagramLogo from '../../public/WEBP/instagramLogo.webp';
import TwtitterLogo from '../../public/WEBP/twitterLogo.webp';
import LinkedinLogo from '../../public/WEBP/linkedin.webp';
import facebookLogo from '../../public/WEBP/facebookLogo.webp';
import sumateLogo from '../../public/PNG/sumados-logo.png';

export default function FooterComponent() {
	const logoSize = 40;
	return (
		<div className="w-full h-20 bg-white flex flex-row justify-center items-center border-b-8 border-dark-green">
			<div className="w-1/2 md:w-1/5 flex flex-row justify-around items-center">
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
	);
}
