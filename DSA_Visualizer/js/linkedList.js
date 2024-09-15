let linkedList = [];

// Render the linked list
function renderLinkedList() {
    const container = document.getElementById('linked-list-visualization');
    container.innerHTML = ''; // Clear the previous list

    // Iterate over each value in the linked list
    linkedList.forEach((value, index) => {
        const node = document.createElement('div'); // Create a node
        node.classList.add('node');
        node.textContent = value; // Set the text to the node's value

        // If the node is not the last one, add an arrow to point to the next node
        if (index < linkedList.length - 1) {
            const arrow = document.createElement('div'); // Create an arrow
            arrow.classList.add('arrow');
            container.appendChild(node); // Append the node to the container
            container.appendChild(arrow); // Append the arrow after the node
        } else {
            container.appendChild(node); // If it's the last node, append the node only
        }
    });
}

// Add a node to the start of the linked list
function addNodeStart() {
    const value = prompt('Enter value to add at the start:');
    if (value) {
        linkedList.unshift(value); // Add the value to the start of the array
        renderLinkedList(); // Re-render the list
    }
}

// Add a node to the end of the linked list
function addNodeEnd() {
    const value = prompt('Enter value to add at the end:');
    if (value) {
        linkedList.push(value); // Add the value to the end of the array
        renderLinkedList(); // Re-render the list
    }
}

// Remove a node from the start of the linked list
function removeNodeStart() {
    if (linkedList.length > 0) {
        linkedList.shift(); // Remove the first element
        renderLinkedList(); // Re-render the list
    }
}

// Remove a node from the end of the linked list
function removeNodeEnd() {
    if (linkedList.length > 0) {
        linkedList.pop(); // Remove the last element
        renderLinkedList(); // Re-render the list
    }
}

// Reverse the linked list
function reverseList() {
    linkedList.reverse(); // Reverse the array
    renderLinkedList(); // Re-render the list
}

// Reset the linked list (clear the list)
function resetList() {
    linkedList = []; // Empty the array
    renderLinkedList(); // Re-render the list
}

// Event listeners for the buttons
document.getElementById('add-node-start').addEventListener('click', addNodeStart);
document.getElementById('add-node-end').addEventListener('click', addNodeEnd);
document.getElementById('remove-node-start').addEventListener('click', removeNodeStart);
document.getElementById('remove-node-end').addEventListener('click', removeNodeEnd);
document.getElementById('reverse-list').addEventListener('click', reverseList);
document.getElementById('reset-list').addEventListener('click', resetList);

// Render the linked list initially (it will be empty initially)
renderLinkedList();
