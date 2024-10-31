import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import QueryProvider from '@/utils/QueryProvider';
import '@/styles/globals.css';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Recipes',
	description: 'Website with lots of recipes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
