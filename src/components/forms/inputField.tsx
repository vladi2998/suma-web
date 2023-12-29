import { Path, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
};
export default function InputField({
	label,
	register,
	required,
	placeholder,
}: InputProps) {
	return (
		<input
			className="hover:cursor-pointer hover:scale-105 transform transition duration-300 w-full h-auto bg-light-gray flex flex-row items-center justify-between px-4 py-6 rounded-l-full rounded-r-full"
			{...register(label, { required })}
			placeholder={placeholder}
		/>
	);
}
