import { StarIcon } from '@heroicons/react/16/solid';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import ForwardButton from '../buttons/forwardButton';

type WorkingItemsProps = {
	title: string;
	place?: string;
	agency?: string;
	description: string;
	colunm?: boolean;
	iconColor?: string;
};

export default function WorkingSectionItem({
	title,
	place,
	agency,
	description,
	colunm = false,
	iconColor = 'rgb(203 213 225)',
}: WorkingItemsProps) {
	const iconSize = colunm ? 132 : 72;
	return (
		<Card className="rounded-4xl">
			<CardContent
				className={`bg-slate-200 flex items-center rounded-4xl p-8 ${
					colunm
						? 'flex-col h-128 justify-around'
						: 'flex-row space-x-4 justify-between'
				}`}>
				<StarIcon
					height={iconSize}
					color={iconColor}
				/>
				<div
					className={`w-full flex flex-col items-start justify-start ${
						colunm ? 'space-y-8' : 'space-y-4'
					}`}>
					<h1 className="w-full text-2xl font-bold text-light-green">
						{title}
					</h1>
					{place && <p className="w-full text-xl">{place}</p>}
					{agency && <p className="w-full text-xl">{agency}</p>}
					<p className="w-full text-xl">{description}</p>
					{colunm && (
						<div className="w-2/3 mx-auto">
							<Link href="/working">
								<ForwardButton text="Ver más" />
							</Link>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
