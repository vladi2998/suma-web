import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/context/AuthProvider';
import { UserProvider } from '@/context/UserProvider';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sumados - UMA',
	description: 'Plataforma de networking para la Universidad Monteavila.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className="scroll-smooth"
			lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<UserProvider>{children}</UserProvider>
				</AuthProvider>
				<Toaster
					richColors
					expand={true}
				/>
			</body>
		</html>
	);
}
