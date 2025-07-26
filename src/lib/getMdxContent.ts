import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const CONTENT_PATH = path.join(process.cwd(), 'src', 'content')

export async function getMdxContent(slug: string) {
  const fullPath = path.join(CONTENT_PATH, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) throw new Error(`File not found: ${slug}.mdx`)

  const source = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })

  return { mdxSource, frontMatter: data }
}
