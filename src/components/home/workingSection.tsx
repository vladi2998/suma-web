'use client';

import H1 from '../H1';
import WorkingSectionItem from './workingItem';

export default function workingSection() {
	return (
		<div className="w-full h-auto flex flex-col items-center py-12 space-y-8">
			<div className="w-full flex items-start">
				<H1 className="ml-20">Trabajemos</H1>
			</div>
			<div className="w-full flex items-center justify-around">
				<div className="w-1/3 flex flex-col items-center justify-center space-y-12">
					<WorkingSectionItem
						title="Dirección de arte"
						iconColor="rgb(54 110 20)"
						description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
					/>
					<WorkingSectionItem
						title="Dirección de arte"
						iconColor="rgb(165 180 252)"
						description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
					/>
					<WorkingSectionItem
						title="Dirección de arte"
						description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
					/>
				</div>
				<div className="w-1/3 flex flex-col items-center justify-center">
					<WorkingSectionItem
						title="Dirección de arte"
						iconColor="rgb(54 110 20)"
						description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi."
						colunm
					/>
				</div>
			</div>
		</div>
	);
}
