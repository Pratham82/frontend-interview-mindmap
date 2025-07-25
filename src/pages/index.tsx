import { Geist, Geist_Mono } from "next/font/google"
import Flow from "@/components/Flow"
import { ReactFlowProvider } from "reactflow"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className="h-screen w-full">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </main>
  )
}
