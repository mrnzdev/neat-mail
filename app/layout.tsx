import type { Metadata } from 'next';
<<<<<<< HEAD
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
=======
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });
>>>>>>> a24797c9ed99924185a9f0b592895c8a153c3dd9	

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
<<<<<<< HEAD
			<body className={`${GeistSans.className} h-dvh`}>
			<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
=======
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
>>>>>>> a24797c9ed99924185a9f0b592895c8a153c3dd9
			</body>
		</html>
	);
}
