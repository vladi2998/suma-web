'use client';
import { StarIcon } from '@heroicons/react/16/solid';
import { Card, CardContent } from '../ui/card';
import ForwardButton from '../buttons/forwardButton';

type WorkingItemsProps = {
	title: string;
	place?: string;
	agency?: string;
	description: string;
	extra_info: string;
	column?: boolean;
	iconColor?: string;
	onSelectWork?: any;
	showExtraInfo?: boolean;
};

export default function WorkingSectionItem({
	title,
	place,
	agency,
	description,
	extra_info,
	column = false,
	iconColor = 'rgb(203 213 225)',
	onSelectWork,
	showExtraInfo,
}: WorkingItemsProps) {
	return (
		<Card className="rounded-4xl">
			<CardContent
				className={`bg-slate-200 flex items-center rounded-4xl p-8 ${
					column
						? `flex-col h-auto ${
								showExtraInfo ? 'h-auto' : 'sm:h-128'
						  } justify-around`
						: 'flex-row space-x-4 justify-between'
				}`}>
				<StarIcon
					className="w-32 lg:42"
					color={iconColor}
				/>
				<div
					className={`w-full flex flex-col items-start justify-start ${
						column ? 'space-y-8' : 'space-y-4'
					}`}>
					<h1 className="w-full text-2xl font-bold text-light-green uppercase">
						{title}
					</h1>
					{place && (
						<p
							className="w-full text-xl"
							dangerouslySetInnerHTML={{ __html: place }}
						/>
					)}
					{agency && (
						<p
							className="w-full text-xl"
							dangerouslySetInnerHTML={{ __html: agency }}
						/>
					)}
					<p
						className="w-full text-xl"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
					{showExtraInfo && (
						<p
							className="w-full text-xl whitespace-break-spaces"
							dangerouslySetInnerHTML={{ __html: extra_info }}
						/>
					)}

					<div className="w-full mx-auto">
						{onSelectWork ? (
							<ForwardButton
								text="Ver más"
								callback={() =>
									onSelectWork({
										title,
										place,
										agency,
										description,
										extra_info,
										iconColor,
									})
								}
							/>
						) : (
							<ForwardButton text="Ver más" />
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
