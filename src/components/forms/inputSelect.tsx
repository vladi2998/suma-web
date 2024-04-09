export type ItemValue = {
	value: string | number;
	label: string;
};

interface InputProps {
	label: string;
	register: any;
	placeholder?: string;
	validation?: any;
	errors?: any;
	values: ItemValue[];
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Agrega esta línea
}

export default function SelectField({
	label,
	register,
	placeholder,
	validation,
	errors,
	values,
	onChange,
}: InputProps) {
	return (
		<select
			className="text-sm md:text-base hover:cursor-pointer hover:bg-light-gray transform transition duration-300 w-full h-auto bg-slate-200 flex flex-row items-center justify-between px-4 py-6 rounded-2xl appearance-none"
			{...register(label, validation)}
			onChange={onChange}
			defaultValue={
				placeholder && (
					<option
						value=""
						disabled
						selected>
						{placeholder}
					</option>
				)
			}>
			{values.map((item, idx) => (
				<option
					value={item.value}
					key={idx}>
					{item.label}
				</option>
			))}
		</select>
	);
}
