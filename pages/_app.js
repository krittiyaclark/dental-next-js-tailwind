import Layout from '../components/Layout'
import '../css/tailwind.css'
import '../css/footer.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
