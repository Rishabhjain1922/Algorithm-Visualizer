const graphContainer = document.getElementById('graph'); // Container for the graph
let nodes = []; // Store nodes in the tree
let edges = {}; // Store edges (connections between nodes)
let bfsInterval, dfsInterval; // Intervals for BFS and DFS traversal
let delay = 1000; // Delay between traversal steps

// Function to create a tree node
function createNode(label) {
    const node = { label, children: [] }; // Node object with label and empty children
    nodes.push(node); // Add the node to the nodes array
    edges[label] = []; // Initialize edges for this node
    return node;
}

// Function to create an edge (connection between two nodes)
function createEdge(parentLabel, childLabel) {
    edges[parentLabel].push(childLabel); // Add the child to the parent's edges
}

// Function to generate a simple tree with at least 10 nodes, level by level
function generateTree() {
    nodes = [];
    edges = {};

    const A = createNode('A');
    const B = createNode('B');
    const C = createNode('C');
    const D = createNode('D');
    const E = createNode('E');
    const F = createNode('F');
    const G = createNode('G');
    const H = createNode('H');
    const I = createNode('I');
    const J = createNode('J');

    // Create edges (connections) between the nodes
    createEdge(A.label, B.label);
    createEdge(A.label, C.label);
    createEdge(B.label, D.label);
    createEdge(B.label, E.label);
    createEdge(C.label, F.label);
    createEdge(C.label, G.label);
    createEdge(D.label, H.label);
    createEdge(E.label, I.label);
    createEdge(F.label, J.label);

    renderTree(); // Render the tree visually
}

// Recursive function to generate HTML for the tree (parent and children)
function generateTreeHTML(label) {
    let childrenHTML = '';
    edges[label].forEach(childLabel => {
        childrenHTML += generateTreeHTML(childLabel); // Recursive call to generate child nodes
    });

    return `
        <div class="tree-node">
            <div class="node">${label}</div>
            <div class="tree-children">${childrenHTML}</div>
        </div>
    `;
}

// Function to render the tree visually in the container
function renderTree() {
    graphContainer.innerHTML = ''; // Clear the previous tree
    const root = nodes.length > 0 ? nodes[0] : null; // Root is the first node in the array
    if (root) {
        const treeHTML = generateTreeHTML(root.label); // Generate HTML for the entire tree
        graphContainer.innerHTML = treeHTML; // Insert the HTML into the container
    }
}

// Function to highlight a node during traversal
function highlightNode(label) {
    const allNodes = document.querySelectorAll('.node');
    allNodes.forEach(node => {
        if (node.textContent === label) {
            node.classList.add('highlight'); // Highlight the current node
        } else {
            node.classList.remove('highlight'); // Remove highlight from other nodes
        }
    });
}

// BFS Traversal with step-by-step visualization
function bfs(startLabel, targetLabel) {
    let queue = [startLabel];
    let visited = new Set();

    bfsInterval = setInterval(() => {
        if (queue.length === 0) {
            clearInterval(bfsInterval); // Stop if no more nodes to visit
            alert('Node not found!');
            return;
        }

        const currentNode = queue.shift(); // Remove the first node from the queue
        highlightNode(currentNode); // Highlight the current node

        if (currentNode === targetLabel) {
            clearInterval(bfsInterval); // Stop if the target node is found
            alert(`Node ${currentNode} found!`);
            return;
        }

        visited.add(currentNode); // Mark the current node as visited

        edges[currentNode].forEach(child => {
            if (!visited.has(child)) {
                queue.push(child); // Add the child nodes to the queue if not visited
            }
        });
    }, delay); // Wait for delay between steps
}

// DFS Traversal with step-by-step visualization
function dfs(startLabel, targetLabel) {
    let stack = [startLabel];
    let visited = new Set();

    dfsInterval = setInterval(() => {
        if (stack.length === 0) {
            clearInterval(dfsInterval); // Stop if no more nodes to visit
            alert('Node not found!');
            return;
        }

        const currentNode = stack.pop(); // Remove the last node from the stack
        highlightNode(currentNode); // Highlight the current node

        if (currentNode === targetLabel) {
            clearInterval(dfsInterval); // Stop if the target node is found
            alert(`Node ${currentNode} found!`);
            return;
        }

        visited.add(currentNode); // Mark the current node as visited

        edges[currentNode].forEach(child => {
            if (!visited.has(child)) {
                stack.push(child); // Add the child nodes to the stack if not visited
            }
        });
    }, delay); // Wait for delay between steps
}

// Event listener to start BFS traversal
document.getElementById('start-bfs').addEventListener('click', () => {
    const target = prompt('Enter the node to search (e.g., A, B, C...):');
    if (target) {
        clearInterval(bfsInterval); // Clear any ongoing BFS interval
        bfs(nodes[0].label, target); // Start BFS from the root node (A)
    }
});

// Event listener to start DFS traversal
document.getElementById('start-dfs').addEventListener('click', () => {
    const target = prompt('Enter the node to search (e.g., A, B, C...):');
    if (target) {
        clearInterval(dfsInterval); // Clear any ongoing DFS interval
        dfs(nodes[0].label, target); // Start DFS from the root node (A)
    }
});

// Event listener to reset the tree and generate a new one
document.getElementById('reset-graph').addEventListener('click', () => {
    clearInterval(bfsInterval); // Clear ongoing BFS interval
    clearInterval(dfsInterval); // Clear ongoing DFS interval
    generateTree(); // Generate a new tree
});

// Generate the initial tree when the page loads
generateTree();
