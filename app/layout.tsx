import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
	title: 'Neat Mail',
	description: 'Email service with a simple and minimalistic UI.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${GeistSans.className} h-dvh p-6 md:p-10 lg:p-20`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
