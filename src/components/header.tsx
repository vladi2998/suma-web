'use client';
import Image from 'next/image';
import Link from 'next/link';
import sumateLogo from '../../public/sumate.png';

export default function HeaderComponent({
	selected_route,
}: {
	selected_route: number;
}) {
	const defaultNavStyle =
		'hover:text-light-green hover:scale-110 transform transition duration-300 h-full x-full flex justify-center items-center cursor-pointer px-2 text-black';
	const selectedNavSyle = 'text-dark-green font-bold scale-110';

	return (
		<nav className="w-full h-24 bg-white flex flex-row justify-between border-t-8 border-dark-green">
			<div className="w-1/3 flex flex-row justify-center items-center">
				<Link href="/">
					<Image
						src={sumateLogo}
						width={200}
						height={200}
						alt="Picture of the author"
					/>
				</Link>
			</div>
			<div className="w-2/3 flex flex-row justify-around items-center">
				<Link
					href="/"
					className={`${defaultNavStyle} ${
						selected_route === 0 ? selectedNavSyle : ''
					}`}>
					Inicio
				</Link>
				<Link
					href="/history/"
					className={`${defaultNavStyle} ${
						selected_route === 1 ? selectedNavSyle : ''
					}`}>
					Historia
				</Link>
				<Link
					href="/connect/"
					className={`${defaultNavStyle} ${
						selected_route === 2 ? selectedNavSyle : ''
					}`}>
					Conectemos
				</Link>
				<Link
					href="/working/"
					className={`${defaultNavStyle} ${
						selected_route === 3 ? selectedNavSyle : ''
					}`}>
					Trabajemos
				</Link>
				<Link
					href="/charts/"
					className={`${defaultNavStyle} ${
						selected_route === 4 ? selectedNavSyle : ''
					}`}>
					Cuadros UMA
				</Link>
				<Link
					href="/my-route/"
					className={`${defaultNavStyle} ${
						selected_route === 5 ? selectedNavSyle : ''
					}`}>
					Mi Ruta
				</Link>
			</div>
		</nav>
	);
}
