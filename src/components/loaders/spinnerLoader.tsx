type LoaderProps = {
	size?: 'sm' | 'md' | 'lg';
	color?: 'white' | 'black' | 'green' | 'blue' | 'red';
};
export default function SpinnerLoader({ size, color }: LoaderProps) {
	const sizeClass =
		size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-12 w-12' : 'h-8 w-8';
	const colorClass =
		color === 'white'
			? 'text-white'
			: color === 'black'
			? 'text-black'
			: color === 'red'
			? 'text-red'
			: color === 'blue'
			? 'text-blue'
			: 'text-dark-green';
	return (
		<div
			className={`${sizeClass} ${colorClass} inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
			role="status">
			<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
				Cargando...
			</span>
		</div>
	);
}
