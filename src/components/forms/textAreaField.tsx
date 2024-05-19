import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	type?: string;
};
export default function TextAreaField({
	label,
	register,
	required,
	placeholder,
}: InputProps) {
	return (
		<textarea
			className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-full bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-2xl"
			{...register(label, { required })}
			placeholder={placeholder}
		/>
	);
}
