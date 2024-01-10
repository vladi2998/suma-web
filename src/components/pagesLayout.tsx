import FooterComponent from './footer';

export default function PagesLayout({
	children,
	footer = true,
}: {
	children: React.ReactNode;
	footer?: boolean;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between space-y-4">
			{children}
			{footer && <FooterComponent />}
		</main>
	);
}
