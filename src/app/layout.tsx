import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Provider from '@/utils/Provider';

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
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
