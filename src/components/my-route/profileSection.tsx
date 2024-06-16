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

export default function ProfileSection() {
	const { auth } = useContext(AuthContext) as any;
	const isAuth = auth.accessToken ? true : false;

	return (
		<Card className="border-none">
			<RouteSummarySection />
		</Card>
	);
}
