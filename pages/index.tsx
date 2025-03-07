import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Priority Tire</title>
				<meta
					name="description"
					content="Priority Tire - najbolje gume i dodatna oprema za vaš automobil."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Typography variant='h1'>Pocetna stranica</Typography>
			</div>
		</>
	);
}
