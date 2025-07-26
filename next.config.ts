// next.config.ts
import type { NextConfig } from 'next'
import withMDX from '@next/mdx'

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // 👈 required
}

export default withMDXConfig(nextConfig)
