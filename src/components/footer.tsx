'use client';
import Image from 'next/image';
import Link from 'next/link';
import InstagramLogo from '../../public/instagramLogo.webp';
import TwtitterLogo from '../../public/twitterLogo.webp';
import LinkedinLogo from '../../public/linkedin.webp';

export default function FooterComponent() {
	return (
		<nav className="w-full h-20 bg-white flex flex-row justify-center items-center border-b-8 border-dark-green">
			<div className="w-1/5 flex flex-row justify-around items-center">
				<Link href="https://www.instagram.com/monteavila/">
					<Image
						src={InstagramLogo}
						width={30}
						height={30}
						alt="Picture of the author"
					/>
				</Link>
				<Link href="https://twitter.com/monteavila/">
					<Image
						src={TwtitterLogo}
						width={30}
						height={30}
						alt="Picture of the author"
					/>
				</Link>
				<Link href="https://www.linkedin.com/school/universidad-monteavila/mycompany/">
					<Image
						src={LinkedinLogo}
						width={30}
						height={30}
						alt="Picture of the author"
					/>
				</Link>
			</div>
		</nav>
	);
}
