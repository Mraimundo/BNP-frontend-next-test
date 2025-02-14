import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { AppProvider } from '@/contexts/user-list';
import { ToasterProvider } from '@/contexts/message-type';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<AppProvider>
				<ToasterProvider>
					<Component {...pageProps} />
				</ToasterProvider>
			</AppProvider>

		</>
	);
}

