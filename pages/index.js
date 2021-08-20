import Head from 'next/head'
import LandingPageHero from '../components/LandingPageHero'
import { client } from '../prismic-configuration'

export default function Home({ hero }) {
	return (
		<div>
			<Head>
				<title>Home Page</title>
				<meta
					name='description'
					content='Awesome langing page built with NextJS and TailwindCSS.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LandingPageHero />
		</div>
	)
}

// export async function getStaticProps() {
// 	const hero = await client.getSingle('hero')

// 	return {
// 		props: {
// 			hero,
// 		},
// 	}
// }
