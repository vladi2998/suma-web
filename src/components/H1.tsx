type H1Props = {
	children: string | JSX.Element;
	className?: string;
};

export default function H1(props: H1Props) {
	return (
		<h1
			className={`w-full text-4xl md:text-8xl font-bold text-start ${
				props.className ?? ''
			}`}>
			{props.children}
		</h1>
	);
}
