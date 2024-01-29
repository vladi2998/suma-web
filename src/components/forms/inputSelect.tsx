import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type ItemValue = {
	value: string | number;
	label: string;
};

type InputProps = {
	label: Path<any>;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	validation?: RegisterOptions<any, string> | undefined;
	errors: any;
	values: ItemValue[];
};

export default function SelectField({
	label,
	register,
	placeholder,
	validation,
	errors,
	values,
}: InputProps) {
	return (
		<>
			<select
				className="text-sm md:text-base hover:cursor-pointer hover:scale-105 transform transition duration-300 w-full h-auto bg-light-gray flex flex-row items-center justify-between px-4 py-6 rounded-l-full rounded-r-full appearance-none"
				{...register(label, validation)}>
				{values.map((item, idx) => (
					<option
						value={item.value}
						key={idx}>
						{item.label}
					</option>
				))}
			</select>
		</>
	);
}
