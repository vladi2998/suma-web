type LoaderProps = {
	size?: 'sm' | 'md' | 'lg';
	color?: 'white' | 'black' | 'green' | 'blue' | 'red';
};
export default function DotsLoader({ size, color }: LoaderProps) {
	const sizeClass =
		size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-12 w-12' : 'h-8 w-8';
	const colorClass =
		color === 'white'
			? 'bg-white'
			: color === 'black'
			? 'bg-black'
			: color === 'red'
			? 'bg-red'
			: color === 'blue'
			? 'bg-blue'
			: 'bg-dark-green';
	return (
		<div className="flex space-x-2 justify-center items-center bg-trasparent w-auto h-auto dark:invert">
			<span className="sr-only">Loading...</span>
			<div
				className={`${sizeClass} ${colorClass} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
			<div
				className={`${sizeClass} ${colorClass} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
			<div
				className={`${sizeClass} ${colorClass} rounded-full animate-bounce`}></div>
		</div>
	);
}
