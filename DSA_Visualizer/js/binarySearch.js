const binarySearchVisualization = document.getElementById('binary-search-visualization');
let sortedArray = [];

// Generate a sorted array from 1 to 20
function generateSortedArray() {
    sortedArray = Array.from({ length: 20 }, (_, i) => i + 1); // Generate array [1, 2, ..., 20]
    renderSortedArray(); // Render the array as bars
}

// Render the sorted array visually as bars
function renderSortedArray() {
    binarySearchVisualization.innerHTML = ''; // Clear previous bars
    sortedArray.forEach(value => {
        let bar = document.createElement('div');
        bar.textContent = value; // Display the value inside the bar
        bar.classList.add('bar'); // Add bar class for styling
        binarySearchVisualization.appendChild(bar); // Append to container
    });
}

// Perform binary search on the sorted array
function binarySearch(target) {
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Calculate the mid-point
        highlight(mid, 'yellow'); // Highlight the mid-point as yellow

        if (sortedArray[mid] == target) {
            highlight(mid, 'green'); // Highlight the found element as green
            return;
        } else if (sortedArray[mid] < target) {
            low = mid + 1; // Move to the right half
        } else {
            high = mid - 1; // Move to the left half
        }
    }

    alert('Target value not found!'); // If target is not found
}

// Highlight a bar at the given index with the specified color
function highlight(index, color) {
    const bars = binarySearchVisualization.querySelectorAll('.bar');
    bars[index].style.backgroundColor = color; // Change the background color of the bar
}

// Event listener for starting the binary search
document.getElementById('start-binary-search').addEventListener('click', () => {
    let target = document.getElementById('binary-search-target').value; // Get target value from input
    binarySearch(Number(target)); // Start binary search for the target
});

// Event listener for resetting the array
document.getElementById('reset-binary-search').addEventListener('click', generateSortedArray);

// Generate the initial sorted array when the page loads
generateSortedArray();
