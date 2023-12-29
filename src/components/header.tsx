'use client';
import Link from 'next/link';

export default function HeaderComponent({
	selected_route,
}: {
	selected_route: number;
}) {
	const defaultNavStyle =
		'hover:bg-lime-100 hover:rounded-t-lg hover:scale-105 transform transition duration-500 cursor-pointer px-2 py-1 text-black';
	const selectedNavSyle = 'border-b-4 border-lime-900';

	return (
		<nav className="w-full h-24 bg-white flex flex-row justify-between border-t-8 border-lime-900">
			<div className="w-1/3"></div>
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
