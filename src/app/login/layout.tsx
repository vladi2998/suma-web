import HeaderComponent from '@/components/header';
import PagesLayout from '@/components/pagesLayout';

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PagesLayout>{children}</PagesLayout>;
}
