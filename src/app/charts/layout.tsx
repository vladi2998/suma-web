import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function ChartsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={4} />
			{children}
		</PagesLayout>
	);
}
