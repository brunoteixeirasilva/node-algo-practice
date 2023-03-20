/* Import the functions from the algorithms folder */
import { getPath } from './algo/getPath';
import { Graph } from './models/Graph';
import { Node } from './models/Node';

const desiredValue = 6;

// Graph object used for testing the functions
let graph = new Graph();

let node1 = new Node(1),
	node2 = new Node(4),
	node3 = new Node(2),
	node4 = new Node(3),
	node5 = new Node(5),
	node6 = new Node(7),
	node7 = new Node(6);

// Configuration of node1
node1.setLeft(node2);
node1.setRight(node3);

// Configuration of node2
node2.setLeft(node4);
node2.setRight(node5);

// Configuration of node3
node3.setLeft(node6);
node3.setRight(node7);

// Add the nodes to the graph
[node1, node2, node3, node4, node5, node6, node7].forEach((node) => {
	graph.addNode(node);
});

console.log('======== Graph Traversing ========');

// asserts the functions by testing them
console.log('-> BFS Traversing:');
const breadthFirstPath = graph.findNode(desiredValue);
console.log(getPath(graph, node1, desiredValue));
console.log('-> DFS Traversing:');
const depthFirstPath = graph.findNode(desiredValue, true);
console.log(getPath(graph, node1, desiredValue));

// Print the results
console.log('-> Results:');
console.log('* Graph object Value: ' + graph.nodes);
console.log('* Breadth-first approach: ' + breadthFirstPath);
console.log('* Depth-first approach: ' + depthFirstPath);
console.log('=========================');
