import { FolderIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	type?: string;
};

export default function ImageField({ label, register, required }: InputProps) {
	const [file, setFile] = useState();

	function handleChange(event: any) {
		setFile(event.target.files[0]);
	}
	return (
		<>
			<input
				className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-full bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-2xl"
				{...register(label, { required })}
				onChange={handleChange}
				type="file"
			/>
		</>
	);
}
