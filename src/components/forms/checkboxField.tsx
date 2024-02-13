import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: Path<any>;
	tag: string;
	register: UseFormRegister<any>;
	required?: boolean;
	placeholder?: string;
	validation?: RegisterOptions<any, string> | undefined;
	errors: any;
	onClick: () => void;
};
export default function CheckboxField({
	label,
	tag,
	register,
	validation,
	errors,
	onClick,
}: InputProps) {
	return (
		<div>
			<div className="flex items-center mb-4">
				<input
					{...register(label, validation)}
					type="checkbox"
					onClick={onClick}
					className="w-6 h-6 border-dark-green rounded focus:ring-dark-green bg-light-green"
				/>
				<label className="ms-2 text-base font-bold text-dark-gray ">
					{tag}
				</label>
			</div>
			{errors[label] && <p className="text-red-500">{errors[label].message}</p>}
		</div>
	);
}
