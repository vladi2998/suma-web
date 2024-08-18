import FooterComponent from './footer';

export default function PagesLayout({
	children,
	footer = true,
}: {
	children: React.ReactNode;
	footer?: boolean;
}) {
	return (
		<main className="flex max-w-screen min-h-screen flex-col items-center justify-between space-y-4">
			<div className="w-full h-auto">{children}</div>
			{footer && <FooterComponent />}
		</main>
	);
}
