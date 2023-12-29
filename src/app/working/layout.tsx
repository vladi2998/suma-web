import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function WorkingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={3}/>
			{children}
		</PagesLayout>
	);
}
