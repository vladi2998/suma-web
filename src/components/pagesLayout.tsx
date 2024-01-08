import FooterComponent from "./footer";

export default function PagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between space-y-4">
			{children}
			<FooterComponent />
		</main>
	);
}
