import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

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
		<html className={`${GeistMono.className} lang='en'`}>
			<body className=' bg-black text-white h-dvh'>{children}</body>
		</html>
	);
}
