export default function PagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			{children}
		</main>
	);
}
