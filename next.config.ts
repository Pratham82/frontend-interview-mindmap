// next.config.js
import withMDX from '@next/mdx'

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx']
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

export default withMDXConfig(nextConfig)
