'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import HstySectionImg from '../../../public/WEBP/historyImg.webp';
import { Button } from '../ui/button';
import H1 from '../H1';
import ForwardButton from '../buttons/forwardButton';
import AuthContext from '@/context/AuthProvider';
import { useContext } from 'react';
import { CreateMyRouteModal } from './createMyRouteModal';
import RouteSummarySection from './RouteSummarySection';
import UserContext from '@/context/UserProvider';

export default function ProfileSection() {
	const { auth } = useContext(AuthContext) as any;
	const { user } = useContext(UserContext) as any;
	const isAuth = auth.accessToken ? true : false;

	return (
		<Card className="border-none">
			<div className="w-full flex flex-row items-center jusitfy-between">
				<H1 className="ml-8">Mi Ruta</H1>
				{isAuth && user?.is_teacher && (
					<div className="w-1/2">
						{/* AQUI ES DONDE TENDRIAS QUE PASAR LA RUTA POR PARAMETRO */}
						<CreateMyRouteModal />
					</div>
				)}
			</div>
			<RouteSummarySection />
		</Card>
	);
}
