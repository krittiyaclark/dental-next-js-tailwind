// import '../css/footer.css'

const Footer = () => {
	return (
		<>
			<div className='md:flex items-center justify-between w-full'>
				<div className='md:flex-shrink-0'>Logo</div>
				<div className='p-8'>
					<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
						Case study
					</div>
					<a
						href='#'
						className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
						Finding customers for your new business
					</a>
					<p className='mt-2 text-gray-500'>
						Getting a new business off the ground is a lot of hard work. Here
						are five ideas you can use to find your first customers.
					</p>
				</div>
			</div>
		</>
	)
}

export default Footer
