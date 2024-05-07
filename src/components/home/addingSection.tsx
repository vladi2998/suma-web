'use client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import AddingItem from './addingItem';
import H1 from '../H1';
import ForwardButton from '../buttons/forwardButton';
import axiosConfigInstance from '@/config/axiosCofig';
import { useEffect, useState } from 'react';
import profile_bg from '../../../public/PNG/profile_bg.png';
import userMale from '../../../public/PNG/userMale.png';
import userFemale from '../../../public/PNG/userFemale.png';
import DotsLoader from '../loaders/dotsLoader';

type AddingSectionProps = {
	showActionButton?: boolean;
};
export default function AddingSection({
	showActionButton = true,
}: AddingSectionProps) {
	const [addingSectionList, setAddingSectionList] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axiosConfigInstance
			.get('/teachers')
			.then((response) => {
				const data = response.data.results.map((teacher: any) => ({
					name: teacher.user.first_name,
					career: teacher.career,
					master: teacher.master,
					specialist: teacher.specialist,
					href: '/',
					img:
						teacher.img ?? teacher?.user?.gender === 'Masculino'
							? userMale
							: teacher?.user?.gender === 'Femenino'
							? userFemale
							: profile_bg,
				}));
				setAddingSectionList(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('There was an error!', error);
			});
	}, []);

	return (
		<Card>
			<CardContent className="flex flex-col items-center justify-around text-center h-auto py-4">
				<H1 className="ml-20">Sumemos</H1>
				{!isLoading ? (
					<>
						<div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
							{addingSectionList.map((item, idx) => (
								<AddingItem
									{...item}
									key={idx}
								/>
							))}
						</div>

						{showActionButton && (
							<div className="w-full flex justify-end my-2">
								<Link
									href="/connect/"
									className="w-96 flex items-center justify-center">
									<ForwardButton text="Ver más" />
								</Link>
							</div>
						)}
					</>
				) : (
					<div className="h-96 flex items-center justify-center">
						<DotsLoader />
					</div>
				)}
			</CardContent>
		</Card>
	);
}
