'use client';

import Image from 'next/image';
import H1 from '../H1';
import WorkingSectionItem from './workingItem';
import bgMountains from '../../../public/PNG/workingBackgroundFHD.png';
import useWindowDimensions from '@/hooks/useWindowsDimensions';
import { useEffect, useState } from 'react';

type WorkingSectionProps = {
	showTitle?: boolean;
};
export default function WorkingSection({
	showTitle = true,
}: WorkingSectionProps) {
	const [width, setWidth] = useState(1024);
	const handleResize = () => setWidth(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<>
			<div className="relative w-screen h-auto">
				<Image
					src={bgMountains}
					className="-z-10"
					alt="image-mountains-bg"
					layout="fill"
					objectFit="cover"
				/>
				<div className="w-full h-full flex flex-col items-center py-4 space-y-4">
					{showTitle && (
						<div className="w-full flex items-start">
							<H1 className="ml-20">Trabajemos</H1>
						</div>
					)}
					<div className="w-full flex flex-col space-y-12 items-center justify-around lg:flex-row">
						<div className="w-3/4 lg:w-2/5 flex flex-col items-center justify-center space-y-12">
							<WorkingSectionItem
								title="Community Manager"
								place="Lugar"
								agency="Agencia"
								iconColor="rgb(54 110 20)"
								description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
								column={width && width >= 1024 ? false : true}
							/>
							<WorkingSectionItem
								title="Dirección de arte"
								place="Lugar"
								agency="Agencia"
								iconColor="rgb(165 180 252)"
								description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
								column={width && width >= 1024 ? false : true}
							/>
							<WorkingSectionItem
								title="Dirección de arte"
								place="Lugar"
								agency="Agencia"
								description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
								column={width && width >= 1024 ? false : true}
							/>
						</div>
						<div className="w-3/4 lg:w-2/5 flex flex-col items-center justify-center">
							<WorkingSectionItem
								title="Dirección de arte"
								iconColor="rgb(54 110 20)"
								description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
								column
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
