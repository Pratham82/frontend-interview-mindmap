import { Node, Edge } from "reactflow"

type Topic = {
  id: string
  label: string
  children?: Topic[]
}

export function buildGraph(data: Topic[]): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const edges: Edge[] = []

  function traverse(topic: Topic, parentId: string | null = null, depth = 0, index = 0) {
    const id = topic.id
    nodes.push({
      id,
      type: "custom", // ✅ Add this line
      data: { label: topic.label },
      position: { x: 0, y: 0 }, // will be updated by layout
    })

    if (parentId) {
      edges.push({
        id: `e${parentId}-${id}`,
        source: parentId,
        target: id,
      })
    }

    if (topic.children) {
      topic.children.forEach((child, i) => traverse(child, id, depth + 1, i))
    }
  }

  data.forEach((root, i) => traverse(root, null, 0, i))

  return { nodes, edges }
}
