import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/16/solid';

const Loader: React.FC = () => {
	return (
		<ArrowPathIcon
			className="animate-spin h-auto w-auto text-light-green bg-white rounded-full p-1 w-8 h-8"
			height={24}
			width={24}
		/>
	);
};

export default Loader;
