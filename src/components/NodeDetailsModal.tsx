'use client'

import { useEffect, useState } from 'react'
import { Node } from 'reactflow'
import {
  MDXRemote,
  MDXRemoteSerializeResult,
  type MDXRemoteProps,
} from 'next-mdx-remote'
import type { ComponentProps } from 'react'
import CodeBlock from './CodeBlock'

type Props = {
  node: Node
  onClose: () => void
}

const components: MDXRemoteProps['components'] = {
  pre: (props: ComponentProps<'pre'>) => <>{props.children}</>,
  code: CodeBlock, // assumes CodeBlock is already typed correctly
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
          body: JSON.stringify({ slug }),
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

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" onClick={onClose} />
      <div
        className="fixed top-0 right-0 z-50 h-full w-1/2 bg-white text-gray-800 shadow-2xl border-l border-gray-200"
        onClick={e => e.stopPropagation()}
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
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-72px)]">
          {mdxContent ? (
            <MDXRemote {...mdxContent} components={components} />
          ) : (
            <p className="text-gray-500">Loading content...</p>
          )}
        </div>
      </div>
    </>
  )
}
