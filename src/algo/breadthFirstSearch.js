import { Graph } from '../models/Graph';

/**
 * Executes a breadth-first search approach, consuming Arrays as queues.
 *
 * @param {Graph} graph The graph to be searched.
 * @param {Number} value The value to be searched.
 *
 * @returns {Array} The path from the start node to the target node.
 *
 * @throws {Error} If the arguments are invalid.
 *
 * @example breadthFirstSearch(graph, 5);
 *
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 * @see https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
 */
export function breadthFirstSearch(graph, value) {
	if (
		typeof graph !== 'object' ||
		graph.nodes.length === 0 ||
		(typeof value !== 'number' && typeof value !== 'string')
	) {
		throw new Error(`breadthFirstSearch: Invalid arguments supplied. graph: ${graph}, value: ${value}`);
	}

	// The queue of nodes to be visited.
	let queue = [graph.nodes[0]];

	// The set of nodes that have been visited.
	let visited = new Set();

	// The map of nodes to their parent nodes.
	let parents = new Map();

	// While there are still nodes to be visited.
	while (queue.length > 0) {
		// Get the first node in the queue (array shift).
		let currentNode = queue.shift();

		console.log(`Current Node Value: ${currentNode.value}`);

		// If the current node is the target node, return the path.
		if (currentNode.value === value) {
			return currentNode;
		}

		// If the current node has not been visited, visit it.
		if (!visited.has(currentNode)) {
			visited.add(currentNode);

			// Add the current node's left/right children to the queue, in case they are valid.
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		// Add the current node to the parents map.
		parents.set(currentNode, currentNode.parent);
	}

	// If the target node was not found, return null.
	return null;
}
