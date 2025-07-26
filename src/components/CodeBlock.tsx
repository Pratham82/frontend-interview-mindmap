// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

type CodeBlockProps = {
  className?: string
  children: string
}

export default function CodeBlock({ className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "")
  const language = match?.[1] || "bash"

  return (
    <SyntaxHighlighter
      style={oneDark}
      language={language}
      PreTag="div"
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
        fontSize: "0.875rem",
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  )
}
