import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import useHooks from '../hooks/useHooks'

const Nav = () => {
	const [toggle, setToggle] = useState(false)

	// After handling the loading condition,
	// you can make use of navigation which is coming from your
	// CMS.
	const { isLoading, errors, data } = useHooks('singleNav')
	console.log(isLoading)

	if (isLoading) {
		return <p>Loading...</p>
	}
	const { alt, url } = data.navigation.data.nav_logo
	// console.log(navigation.data.navigation_bar)
	console.log(data)
	console.log(data.navigation.data.nav_logo)
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap pt-14 fixed w-full z-10 top-0 pin-t'>
				<div className='flex items-center flex-shrink-0 text-white mr-6'>
					<Link href='/'>
						<a
							className='text-white no-underline hover:text-white hover:no-underline'
							href='#'>
							<span className='text-2xl pl-2 font-semibold'>
								<Image src={url} alt={alt} width={275.77} height={50} />
							</span>
						</a>
					</Link>
				</div>

				<div className='block lg:hidden'>
					<button
						id='nav-toggle'
						className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white'
						onClick={() => setToggle(!toggle)}>
						<svg
							className='fill-current h-3 w-3'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>

				<div
					className={`${
						toggle ? 'hidden' : ''
					} ${'w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0'}`}
					id='nav-content'>
					<ul className='list-reset lg:flex justify-end flex-1 items-center'>
						{data.navigation.data.navigation_bar &&
							data.navigation.data.navigation_bar.map((nav, index) => {
								console.log(nav)
								return nav.nav_lebel.map((item, index) => {
									const url = item.text.replace(/\s+/g, '-')
									return (
										<li key={index} className='mr-6 py-2 md:py-1 xs:py-2'>
											<Link href={`${'/'}${url}`}>
												<a
													className={`${
														nav.is_button === 'button'
															? 'border border-gray-200 rounded-md py-2 text-white'
															: ''
													} ${'text-white mr-5 px-3 py-2 hover:text-white hover:rounded-md hover:bg-gray-700'}`}>
													{item.text}
												</a>
											</Link>
										</li>
									)
								})
							})}
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Nav
