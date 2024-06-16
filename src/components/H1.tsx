type H1Props = {
	children: string | JSX.Element;
	className?: string;
};

export default function H1(props: H1Props) {
	return (
		<h1
			className={`w-full text-3xl md:text-8xl font-semibold text-start ${
				props.className ?? ''
			}`}>
			{props.children}
		</h1>
	);
}
