import PagesLayout from '@/components/pagesLayout';

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PagesLayout footer={false}>{children}</PagesLayout>;
}
