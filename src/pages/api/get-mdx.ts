import { getMdxContent } from '@/lib/getMdxContent'
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { slug } = req.body
  if (!slug) return res.status(400).json({ error: 'Missing slug' })

  try {
    const content = await getMdxContent(slug)
    res.status(200).json(content)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(404).json({ error: err })
    } else {
      res.status(404).json({ error: 'Unknown error occurred' })
    }
  }
}
