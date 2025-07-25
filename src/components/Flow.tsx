// components/Flow.tsx
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  NodeMouseHandler,
  useEdgesState,
  useNodesState,
} from "reactflow"
import "reactflow/dist/style.css"
import { getLayoutedElements } from "@/lib/layout"
import { topics } from "@/data"
import { buildGraph } from "@/utils/buildGraph"
import { useReactFlow } from "reactflow"
import { useEffect, useState } from "react"
import CustomNode from "./CustomNode"
import NodeDetailModal from "./NodeDetailsModal"
import { Node } from "reactflow"
import TitleNode from "./TitleNode"

const nodeTypes = {
  custom: CustomNode,
  titleNode: TitleNode,
}

type CustomNodeData = {
  label: string
}
type TitleNodeData = { title: string }

type NodeData = CustomNodeData | TitleNodeData

export default function Flow() {
  const { nodes: rawNodes, edges: rawEdges } = buildGraph(topics)
  const layouted = getLayoutedElements(rawNodes, rawEdges)
  const { fitView } = useReactFlow()

  useEffect(() => {
    fitView({ padding: 0.3 }) // Adjust padding as needed
  }, [layouted.nodes, layouted.edges])

  const [nodes, setNodes, onNodesChange] = useNodesState(layouted.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(layouted.edges)
  const [selectedNode, setSelectedNode] = useState<Node<NodeData> | null>(null)

  const onNodeClick: NodeMouseHandler = (_event, node) => {
    setSelectedNode(node)
  }

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitViewOptions={{ padding: 1 }}
        nodesDraggable={true}
        zoomOnScroll={true}
        // onClick={onNodeClick}
        onNodeClick={onNodeClick}
        fitView
        panOnScroll
        zoomOnPinch
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>

      {/* 👇 Slide-in Modal */}
      {selectedNode && (
        <NodeDetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </>
  )
}
