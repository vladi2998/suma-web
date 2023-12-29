import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function Page() {
	return (
		<PagesLayout>
			<HeaderComponent selected_route={0}/>
			Inicio
		</PagesLayout>
	);
}
