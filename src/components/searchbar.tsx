import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

export default function SearchBar({}: any) {
	const [search, setSearch] = useState('');
	const [focus, setFocus] = useState(false);

	const handleSearch = () => {
		// We should do fetching with the type here
		console.log('Sending typing to backend...', { body: search });
	};

	const handleClearSearch = () => setSearch('');

	return (
		<div className="w-full flex flex-col relative">
			<input
				className={`text-sm md:text-base font-semibold hover:cursor-pointer ${
					focus ? 'bg-light-gray text-dark-gray' : 'bg-dark-green'
				} hover:bg-light-gray transform transition duration-300 w-full h-auto flex flex-row items-center justify-between pl-4 pr-20 py-4 rounded-l-full rounded-r-full border-none`}
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder={'Busca una ruta que te interese...'}
				onKeyUp={(e) => {
					if (e.keyCode === 13) handleSearch();
				}}
				value={search}
			/>

			<MagnifyingGlassIcon
				color={'rgb(51 65 85)'}
				className="hover:cursor-pointer absolute h-8 top-3 right-4 hover:scale-105 transform transition duration-300"
				onClick={handleSearch}
			/>
			{search && search !== '' ? (
				<XMarkIcon
					color={'rgb(51 65 85)'}
					className="hover:cursor-pointer absolute h-8 top-3 right-12 hover:scale-105 transform transition duration-300"
					onClick={handleClearSearch}
				/>
			) : null}
		</div>
	);
}
