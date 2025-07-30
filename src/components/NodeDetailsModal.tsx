'use client'

import { useEffect, useState } from 'react'
import { Node } from 'reactflow'
import {
  MDXRemote,
  MDXRemoteSerializeResult,
  type MDXRemoteProps
} from 'next-mdx-remote'
import type { ComponentProps } from 'react'
import CodeBlock from './CodeBlock'
import Link from 'next/link'

type Props = {
  node: Node
  onClose: () => void
}

const components: MDXRemoteProps['components'] = {
  pre: (props: ComponentProps<'pre'>) => <>{props.children}</>,
  code: CodeBlock, // assumes CodeBlock is already typed correctly
  // a: (props) => <Link {...props} />,

  // pre: ({ children, ...props }) => (
  //   <pre {...props} className="overflow-x-auto rounded bg-gray-900 text-white p-4">
  //     {children}
  //   </pre>
  // ),

  // Custom <code> block rendering

  // Use next/link for <a>
  a: ({ href, ...props }) => (
    <Link
      href={href || '#'}
      {...props}
      className="text-blue-600 underline hover:text-blue-800"
    />
  ),

  // Headings (optional customization for typography)
  h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  h3: (props) => <h3 {...props} className="text-xl font-medium mt-4 mb-2" />,
  ul: (props) => <ul {...props} className="list-disc list-inside space-y-1" />,
  ol: (props) => (
    <ol {...props} className="list-decimal list-inside space-y-1" />
  ),
  li: (props) => <li {...props} className="ml-4" />
}

export default function NodeDetailModal({ node, onClose }: Props) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null
  )

  useEffect(() => {
    const fetchContent = async () => {
      const slug = node?.data?.slug || node?.id
      try {
        const res = await fetch('/api/get-mdx', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug })
        })
        const data = await res.json()
        if (res.ok) {
          setMdxContent(data.mdxSource)
        } else {
          console.error(data.error)
        }
      } catch (error) {
        console.error('Fetch failed:', error)
      }
    }

    fetchContent()
  }, [node])

  console.log({ mdxContent })

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" onClick={onClose} />
      <div
        className="fixed top-0 right-0 z-50 h-full w-1/2 bg-white text-gray-800 shadow-2xl border-l border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b bg-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{node.data.label}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <div className="px-4 space-y-4 overflow-y-auto h-[calc(100%-72px)]">
          {mdxContent ? (
            <div className="prose max-w-none">
              <MDXRemote {...mdxContent} components={components} />
            </div>
          ) : (
            <div className="py-4">
              <p className="text-gray-500">Loading content...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
