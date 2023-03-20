/**
 * Node class, used by the Graph data structure.
 */
export class Node {
	constructor(value, parent = null, left = null, right = null) {
		this.value = value;
		this.parent = parent;
		this.left = left;
		this.right = right;
	}
	setValue(value) {
		this.value = value;
	}
	setParent(node) {
		if (typeof node === 'number' || typeof node === 'string') {
			node = new Node(node);
		}

		this.parent = node;
	}
	setRight(node) {
		if (typeof node === 'number' || typeof node === 'string') {
			node = new Node(node);
		}

		// Keeps the parent information,
		// so that the path can be traced back.
		node.setParent(this);

		this.right = node;
	}
	setLeft(node) {
		if (typeof node === 'number' || typeof node === 'string') {
			node = new Node(node);
		}

		// Keeps the parent information,
		// so that the path can be traced back.
		node.setParent(this);

		this.left = node;
	}
}
