import { breadthFirstSearch } from '../algo/breadthFirstSearch';
import { depthFirstSearch } from '../algo/depthFirstSearch';
import { Node } from './Node';

/**
 * Graph class, used for the BFS and DFS algorithms.
 */
export class Graph {
	constructor() {
		this.nodes = [];
		this.edges = [];
	}
	addNode(value, parent = null, left = null, right = null) {
		let node = typeof value === 'number' || typeof value === 'string' ? new Node(value) : value;

		// Keeps the parent information,
		// so that the path can be traced back.
		if (parent) {
			// let parentNode = this.breadthFirstSearch(parent);
			node.setParent(parent);
		}
		if (left) {
			node.setLeft(left);
		}
		if (right) {
			node.setRight(right);
		}

		this.nodes.push(node);
	}
	addEdge(edge) {
		this.edges.push(edge);
	}
	removeNode(node) {
		this.nodes = this.nodes.splice(this.nodes.indexOf(node), 1);
	}
	removeEdge(edge) {
		this.nodes = this.edges.splice(this.edges.indexOf(edge), 1);
	}
	breadthFirstSearch(nodeOrValue) {
		return breadthFirstSearch(this, typeof nodeOrValue === 'object' ? nodeOrValue.value : nodeOrValue);
	}
	depthFirstSearch(nodeOrValue) {
		return depthFirstSearch(this, typeof nodeOrValue === 'object' ? nodeOrValue.value : nodeOrValue);
	}
	findNode(nodeOrValue, useDepthFirstApproach = false) {
		return useDepthFirstApproach ? this.depthFirstSearch(nodeOrValue) : this.breadthFirstSearch(nodeOrValue);
	}
}
