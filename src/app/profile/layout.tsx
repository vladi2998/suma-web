import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={5} />
			{children}
		</PagesLayout>
	);
}
