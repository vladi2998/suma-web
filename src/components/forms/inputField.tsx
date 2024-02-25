import { Path, UseFormRegister } from 'react-hook-form';


type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	type?: string
};
export default function InputField({
	label,
	register,
	required,
	placeholder,
	type
}: InputProps) {
	return (
		<input
			className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-full bg-slate-300 flex flex-row items-center justify-between px-4 py-6 rounded-5xl"
			{...register(label, { required })}
			placeholder={placeholder}
			type={type}
		/>
	);
}
