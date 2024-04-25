import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthProvider';
import { UserProvider } from '@/context/UserProvider';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sumemos - UMA',
	description: 'Plataforma de networking para la Universidad Monteavila.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<UserProvider>{children}</UserProvider>
				</AuthProvider>
				<Toaster />
			</body>
		</html>
	);
}
