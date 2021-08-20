import Prismic from 'prismic-javascript'

export const API_URL = 'https://monogramnextjsprismic.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_ACCESS_TOKEN

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN })
