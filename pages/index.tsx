import { Box, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

const StyledDiv = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: theme.spacing(20)
}));

export default function Home() {
	return (
		<>
			<Head>
				<title>Priority Tire - Homepage</title>
				<meta
					name="description"
					content="Priority Tire - najbolje gume i dodatna oprema za vaš automobil."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<StyledDiv>
				<Typography variant="h1">
					For this task you should focus on configurable products.
					Also, reusable components and SSR should be a priority.
				</Typography>
			</StyledDiv>
		</>
	);
}
