import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
	fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-montserrat)',
		h1: {
			fontWeight: 400,
			fontSize: '4rem'
		}
	}
});

export default function App({ Component, pageProps, ...props }: AppProps) {
	return (
		<AppCacheProvider {...props}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ThemeProvider theme={theme}>
				<main className={montserrat.variable}>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</AppCacheProvider>
	);
}
