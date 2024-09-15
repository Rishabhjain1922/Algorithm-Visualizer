const nqueensBoard = document.getElementById('nqueens-board');
const n = 8;
let queens = Array(n).fill(-1);
let solving = false;
let delay = 500;

// Create chessboard
function createBoard() {
    nqueensBoard.innerHTML = '';
    for (let i = 0; i < n * n; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        // Set alternating colors for the chessboard
        if (Math.floor(i / 8) % 2 === 0) {
            square.style.backgroundColor = i % 2 === 0 ? '#fff' : '#ccc';
        } else {
            square.style.backgroundColor = i % 2 === 0 ? '#ccc' : '#fff';
        }
        nqueensBoard.appendChild(square);
    }
}

function resetBoard() {
    queens.fill(-1);
    solving = false;
    createBoard(); // Recreate the board on reset
}

function updateBoard(row, col, place) {
    const squares = nqueensBoard.querySelectorAll('.square');
    const index = row * n + col; // Calculate index for square placement
    if (place) {
        squares[index].innerHTML = '♛'; // Place the queen icon
        squares[index].classList.add('queen');
    } else {
        squares[index].innerHTML = ''; // Remove the queen icon
        squares[index].classList.remove('queen');
    }
}

// Check if placing a queen is safe
function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
        // Check if another queen is in the same column or diagonal
        if (queens[i] === col || Math.abs(queens[i] - col) === Math.abs(i - row)) {
            return false;
        }
    }
    return true;
}

// Solve N-Queens using backtracking
async function solveNQueens(row = 0) {
    if (row === n) {
        solving = false; // Solution found, stop solving
        return true;
    }

    // Try placing queen in each column
    for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
            queens[row] = col;
            updateBoard(row, col, true); // Place the queen visually
            await sleep(delay); // Wait before proceeding

            if (await solveNQueens(row + 1)) return true; // Recursive call

            // If placing queen fails, backtrack
            updateBoard(row, col, false); // Remove the queen
            queens[row] = -1;
            await sleep(delay); // Wait for backtracking
        }
    }
    return false; // No valid solution found for this branch
}

// Helper function to pause execution for visualization
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listener to start solving N-Queens
document.getElementById('start-nqueens').addEventListener('click', () => {
    if (!solving) {
        solving = true;
        resetBoard();
        solveNQueens(); // Start solving the N-Queens problem
    }
});

// Event listener to reset the board
document.getElementById('reset-nqueens').addEventListener('click', resetBoard);

// Initialize and create the chessboard when page loads
createBoard();
