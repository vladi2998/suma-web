import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function ConnectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={2}/>
			<section>
				<nav></nav>
				{children}
			</section>
		</PagesLayout>
	);
}
