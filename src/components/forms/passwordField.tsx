import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	validation?: RegisterOptions<any, string> | undefined;
	errors: any;
};
export default function PasswordField({
	label,
	register,
	placeholder,
	validation,
	errors,
}: InputProps) {
	const [hide, setHide] = useState(true);
	const [type, setType] = useState('password');

	const handleHidePassword = () => {
		setHide(!hide);
		setType(hide ? 'text' : 'password');
	};

	return (
		<div className="w-full flex flex-col relative">
			<input
				className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-auto bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-l-full rounded-r-full"
				type={type}
				{...register(label, validation)}
				placeholder={placeholder}
			/>
			{hide ? (
				<EyeIcon
					color="rgb(20 83 45)"
					className="hover:cursor-pointer absolute h-10 top-4 right-4 transform transition duration-300"
					onClick={handleHidePassword}
				/>
			) : (
				<EyeSlashIcon
					color="rgb(20 83 45)"
					className="hover:cursor-pointer absolute h-10 top-4 right-4 transform transition duration-300"
					onClick={handleHidePassword}
				/>
			)}
			{errors[label] && <p className="text-red-500">{errors[label].message}</p>}
		</div>
	);
}
