'use client';
import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	errors: any;
};

export function DateTimeField({
	label,
	register,
	required,
	placeholder,
	errors,
}: InputProps) {
	return (
		<div className="w-full flex flex-col relative">
			<input
				className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-auto bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-2xl"
				type="date"
				{...register(label, { required })}
				placeholder={placeholder}
			/>
			{errors[label] && <p className="text-red-500">{errors[label].message}</p>}
		</div>
	);
}
