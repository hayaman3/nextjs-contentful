import Layout from '@/components/layout';
import '../styles/globals.css';

interface Props {
	Component: React.ComponentType;
	pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
