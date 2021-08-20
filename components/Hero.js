import Image from 'next/image'

import useHooks from '../hooks/useHooks'

const Hero = () => {
	const { isLoading, errors, data } = useHooks('hero')
	console.log(data)

	if (isLoading) {
		return <p>Loading...</p>
	}
	const backgroundImage = data.hero.data.body[0].primary.icon_image.url
	const backgroundAlt = data.hero.data.body[0].primary.button_label

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div>
			<Image
				src={backgroundImage}
				alt={backgroundAlt}
				width='100%'
				height='100%'
				layout='fill'
				objectFit='cover'
			/>
		</div>
	)
}

export default Hero
