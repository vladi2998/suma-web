import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function RouteByIdLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={5} />
			<section>
				<nav></nav>
				{children}
			</section>
		</PagesLayout>
	);
}
