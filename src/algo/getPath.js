/* Object imports */
import { Graph } from '../models/Graph';
import { Node } from '../models/Node';

/**
 * Provides the path from the start node to the target node identified in a Graph object.
 *
 * @param {Graph} graph The Graph with the nodes to traverse.
 * @param {Node} startNode The start node.
 * @param {Node} targetNode The target node.
 */
export function getPath(graph, startNode, targetNode, useDepthFirstApproach = false) {
	// The path from the start node to the target node.
	let path = [];

	// The current node.
	let currentNode = targetNode;

	// While the current node is not the start node.
	while (currentNode.value !== startNode.value) {
		// Add the current node to the path.
		path.push(currentNode);

		// Set the current node to its parent node.
		currentNode = graph.findNode(currentNode.parent, useDepthFirstApproach);
	}

	// Add the start node to the path.
	path.push(startNode);

	// Return the path representation.
	return path
		.reverse()
		.map((node) => `( ${node.value} )`)
		.join(' -> ');
}
