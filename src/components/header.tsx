'use client';
import Image from 'next/image';
import Link from 'next/link';
import sumateLogo from '../../public/PNG/sumados-logo.png';
import {
	Bars3Icon,
	UserCircleIcon,
	XMarkIcon,
} from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import AuthContext from '@/context/AuthProvider';
import { useContext } from 'react';
import { clearAuthHeader } from '@/config/axiosCofig';
import { redirect } from 'next/navigation';

export default function HeaderComponent({
	selected_route,
}: {
	selected_route: number;
}) {
	const { auth, setAuth } = useContext(AuthContext) as any;

	const isAuth = auth.accessToken ? true : false;

	if (!isAuth) {
		redirect('/login');
	}

	const defaultNavStyle =
		'relative text-xxs text-center md:text-base w-fit block after:block after:content-full after:absolute after:h-[3px] after:bg-dark-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center';
	const selectedNavSyle =
		'block text-dark-green font-bold border-b-[3px] border-dark-green h-auto';
	const [showHamburguerMenu, setshowHamburguerMenu] = useState<boolean>(false);

	const [userMenuIsVisible, setUserMenuIsVisible] = useState(false);

	const handleHamburguerMenu = () => setshowHamburguerMenu(!showHamburguerMenu);

	const handleResize = () =>
		window.innerWidth >= 768 ? setshowHamburguerMenu(false) : null;

	const handleLogOut = () => {
		setAuth({});
		clearAuthHeader();
		localStorage.setItem('accessToken', '');
		localStorage.setItem('refreshToken', '');
		localStorage.clear();
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<nav
			className={`w-full max-w-full z-10 ${
				showHamburguerMenu ? 'h-32' : 'h-20'
			} bg-white flex flex-col md:flex-row justify-around items-end border-t-8 border-dark-green`}>
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
						width={300}
						height={300}
						alt="sumados-logo"
					/>
				</Link>
			</div>
			<div
				className={`${
					showHamburguerMenu ? 'flex mb-2 h-12 w-full' : 'hidden'
				} md:w-2/3 md:flex flex-row justify-around items-center`}>
				<Link
					href="/"
					className={`${defaultNavStyle} ${
						selected_route === 0 ? selectedNavSyle : ''
					}`}>
					Inicio
				</Link>
				<Link
					href="/us/"
					className={`${defaultNavStyle} ${
						selected_route === 1 ? selectedNavSyle : ''
					}`}>
					Nosotros
				</Link>
				<Link
					href="/connect/"
					className={`${defaultNavStyle} ${
						selected_route === 2 ? selectedNavSyle : ''
					}`}>
					Sumemos
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
				<UserCircleIcon
					className="w-6 h-6 md:w-8 md:h-8 hover:cursor-pointer"
					color="rgb(20 83 45)"
					onClick={() => setUserMenuIsVisible(!userMenuIsVisible)}
				/>
				<Card
					className={`${
						userMenuIsVisible ? 'block' : 'hidden'
					} absolute right-5 top-32 md:right-10 md:top-20 p-4`}>
					<ul className="space-y-3 w-full">
						<li>
							{isAuth ? (
								<Link
									href="/profile/"
									className={`${defaultNavStyle}`}>
									Mi Perfil
								</Link>
							) : (
								<Link
									href="/register/"
									className={`${defaultNavStyle}`}>
									Registrarse
								</Link>
							)}
						</li>
						<li>
							{isAuth ? (
								<p
									onClick={handleLogOut}
									className={`${defaultNavStyle} hover:cursor-pointer`}>
									Cerrar Sesión
								</p>
							) : (
								<Link
									href="/login/"
									className={`${defaultNavStyle}`}>
									Iniciar Sesión
								</Link>
							)}
						</li>
					</ul>
				</Card>
			</div>
		</nav>
	);
}
