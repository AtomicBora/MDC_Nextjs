import {
	DocumentHeadTags,
	DocumentHeadTagsProps,
	documentGetInitialProps
} from '@mui/material-nextjs/v15-pagesRouter';
import {
	DocumentContext,
	DocumentProps,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document';

export default function MyDocument(
	props: DocumentProps & DocumentHeadTagsProps
) {
	return (
		<Html lang="en">
			<Head />
			<body>
				<DocumentHeadTags {...props} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const finalProps = await documentGetInitialProps(ctx, {});
	return finalProps;
};
