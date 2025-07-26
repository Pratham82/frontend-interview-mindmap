// pages/content/[...slug].tsx
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { getMdxContent } from "@/lib/getMdxContent"

interface Props {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: any
}

export default function MdxPage({ mdxSource }: Props) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...mdxSource} />
    </div>
  )
}

// 👇 Pre-generate pages or fallback on demand
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[]
  const { mdxSource, frontMatter } = await getMdxContent(slug)

  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}

// Optional — only if you want to pre-generate all paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking", // or true
  }
}
