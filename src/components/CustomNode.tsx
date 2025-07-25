// components/CustomNode.tsx
import { Handle, Position } from "reactflow"

const CustomNode = ({ data }: any) => {
  return (
    <div className="relative bg-white border border-blue-500 rounded-2xl px-5 py-4 min-w-[140px] shadow-md hover:shadow-lg transition-shadow duration-200 group">
      <div className="text-blue-800 font-semibold text-sm text-center">{data.label}</div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500 border-2 border-white rounded-full"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500 border-2 border-white rounded-full"
      />
    </div>
  )
}

export default CustomNode
