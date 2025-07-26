// lib/mdx.ts
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const CONTENT_PATH = path.join(process.cwd(), "content") // your .mdx folder

export async function getMdxContent(slugArray: string[]) {
  const filePath = path.join(CONTENT_PATH, ...slugArray) + ".mdx"
  const source = fs.readFileSync(filePath, "utf8")

  const { content, data } = matter(source) // parses frontmatter
  const mdxSource = await serialize(content, { scope: data })

  return {
    mdxSource,
    frontMatter: data,
  }
}
