import dagre from "dagre"
import { Node, Edge } from "reactflow"

const nodeWidth = 180
const nodeHeight = 72 // slightly taller to fit tailwind-styled nodes

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB" // "TB" = top-bottom (vertical), "LR" = left-right (horizontal)
): { nodes: Node[]; edges: Edge[] } {
  // 🧭 Set layout direction
  dagreGraph.setGraph({ rankdir: direction })

  // 🧱 Set size for each node in the graph
  nodes.forEach(node => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  // 🔗 Add edges to the graph
  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  // 🔄 Compute layout
  dagre.layout(dagreGraph)

  // 📌 Position nodes based on layout
  const layoutedNodes = nodes.map(node => {
    const { x, y } = dagreGraph.node(node.id)
    return {
      ...node,
      position: {
        x: x - nodeWidth / 2,
        y: y - nodeHeight / 2,
      },
      draggable: true,
    }
  })

  return { nodes: layoutedNodes, edges }
}
