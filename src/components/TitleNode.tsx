// components/TitleNode.tsx
import { Handle, Position } from "reactflow"

type TitleNodeData = {
  label: string
}

const TitleNode = ({ data }: { data: TitleNodeData }) => {
  return (
    <div className="bg-gray-100 border border-gray-400 rounded-xl px-4 py-3 shadow">
      <div className="text-gray-700 font-extrabold text-center text-lg">{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-gray-400 border-white border-2 rounded-full"
      />
    </div>
  )
}

export default TitleNode
