// components/NodeDetailModal.tsx
import { Node } from "reactflow"

type Props = {
  node: Node
  onClose: () => void
}

export default function NodeDetailModal({ node, onClose }: Props) {
  return (
    <>
      {/* Transparent click-catcher, only half screen */}
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />

      {/* Right panel that shows node details */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-1/2 bg-white text-gray-800 shadow-2xl border-l border-gray-200"
        onClick={e => e.stopPropagation()} // prevent modal close on click inside
      >
        <div className="p-5 border-b bg-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Node Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-72px)]">
          <div>
            <span className="font-medium text-gray-600">ID:</span>
            <p className="text-lg">{node.id}</p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Label:</span>
            <p className="text-lg">{node.data?.label ?? "N/A"}</p>
          </div>
        </div>
      </div>
    </>
  )
}
