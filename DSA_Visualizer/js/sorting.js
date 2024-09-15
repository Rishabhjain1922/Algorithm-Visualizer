let sortingArray = [];
let sortingInterval;

// Generate random array for sorting
function generateSortingArray() {
    sortingArray = [];
    for (let i = 0; i < 50; i++) {
        sortingArray.push(Math.floor(Math.random() * 100)); // Random values between 0-100
    }
    renderSortingArray(); // Render the initial array
}

// Render the array as bars for visualization
function renderSortingArray() {
    const sortingContainer = document.getElementById('sorting-visualization');
    sortingContainer.innerHTML = ''; // Clear previous bars
    sortingArray.forEach(value => {
        const bar = document.createElement('div');
        bar.style.height = `${value}%`;
        bar.classList.add('bar');
        sortingContainer.appendChild(bar); // Add bar to container
    });
}

// Start Bubble Sort Visualization
function startBubbleSort() {
    clearInterval(sortingInterval); // Clear previous sorting interval if any
    let i = 0;
    sortingInterval = setInterval(() => {
        if (i >= sortingArray.length - 1) {
            clearInterval(sortingInterval); // Stop sorting when done
        } else {
            bubbleSortStep(i);
            i++;
        }
    }, 500);  // Adjust speed (500 ms delay between steps)
}

// Perform one step of Bubble Sort
function bubbleSortStep(i) {
    let swapped = false;
    for (let j = 0; j < sortingArray.length - i - 1; j++) {
        const bars = document.querySelectorAll('.bar');
        bars[j].classList.add('comparing'); // Highlight bars being compared
        bars[j + 1].classList.add('comparing');

        if (sortingArray[j] > sortingArray[j + 1]) {
            // Swap values
            [sortingArray[j], sortingArray[j + 1]] = [sortingArray[j + 1], sortingArray[j]];
            swapped = true;
            renderSortingArray(); // Re-render array after swap
        }

        // Remove comparison highlight after a short delay
        setTimeout(() => {
            bars[j].classList.remove('comparing');
            bars[j + 1].classList.remove('comparing');
        }, 400);
    }

    if (!swapped) {
        clearInterval(sortingInterval); // Stop if no swaps were made (array is sorted)
    }
}

// Event listener to start sorting
document.getElementById('start-sorting').addEventListener('click', startBubbleSort);

// Event listener to reset array
document.getElementById('reset-sorting').addEventListener('click', generateSortingArray);

// Initial array generation when page loads
generateSortingArray();
