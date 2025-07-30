// src/components/MDXLayout.tsx
export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="prose prose-neutral max-w-none dark:prose-invert">
    //   {children}
    // </div>

    <div className="prose">
      <h1>This is a test</h1>
      <p>This should be styled if prose is working.</p>
    </div>
  )
}
