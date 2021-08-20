// // pages/api/getSingleNavigation.js
// import { client } from '../../prismic-configuration'
// export default async function getSingleNavigation(req, res) {
// 	try {
// 		const hero = await client.getSingle('hero')
// 		// This will be logged in terminal instead of browser console.
// 		console.log(hero)
// 		return res.status(200).json({ navigation })
// 	} catch {
// 		return res.status(500).json({ message: 'Something went wrong.' })
// 	}
// }
"use strict";