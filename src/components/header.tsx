'use client';
import Image from 'next/image';
import Link from 'next/link';
import sumateLogo from '../../public/PNG/sumados-logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

export default function HeaderComponent({
	selected_route,
}: {
	selected_route: number;
}) {
	const defaultNavStyle =
		'hover:text-light-green hover:scale-110 text-xs sm:text-sm md:text-base text-center transform transition duration-300 h-full w-full flex justify-center items-center cursor-pointer px-1 md:px-2 text-black';
	const selectedNavSyle = 'text-dark-green font-bold scale-110';
	const [showHamburguerMenu, setshowHamburguerMenu] = useState<boolean>(false);

	const handleHamburguerMenu = () => setshowHamburguerMenu(!showHamburguerMenu);

	const handleResize = () =>
		window.innerWidth >= 768 ? setshowHamburguerMenu(false) : null;

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<nav
			className={`w-full ${
				showHamburguerMenu ? 'h-32' : 'h-20'
			} bg-white flex flex-col md:flex-row justify-around items-end border-t-8 border-dark-green transition-all duration-300`}>
			<div className="w-full h-full md:w-1/3 flex flex-row justify-between md:justify-center items-center">
				<div className="w-1/5 flex items-center justify-center md:hidden">
					{showHamburguerMenu ? (
						<XMarkIcon
							className="cursor-pointer"
							color="rgb(20 83 45)"
							width={40}
							height={40}
							onClick={handleHamburguerMenu}
						/>
					) : (
						<Bars3Icon
							className="cursor-pointer"
							color="rgb(20 83 45)"
							width={40}
							height={40}
							onClick={handleHamburguerMenu}
						/>
					)}
				</div>
				<Link
					href="/"
					className="mt-4">
					<Image
						src={sumateLogo}
						width={400}
						height={400}
						alt="sumados-logo"
					/>
				</Link>
			</div>
			<div
				className={`${
					showHamburguerMenu ? 'flex mb-2 h-12' : 'hidden'
				} md:w-2/3 md:flex flex-row justify-around items-center`}>
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
