Algorithm Visualizer
Algorithm Visualizer is an interactive web-based tool that helps users understand and explore various algorithms and data structures by visualizing their step-by-step execution. It is designed for students, educators, and anyone interested in learning how algorithms work.

Features
1. N-Queens Problem Visualization
Visualizes the backtracking solution for the N-Queens problem on an 8x8 chessboard.
Step-by-step queen placement with dynamic conflict detection.
Users can start and reset the visualization.
2. Sorting Algorithms Visualization
Visualizes the sorting process of the following algorithms:
Bubble Sort
Merge Sort
Quick Sort
Displays comparisons and swaps using animated bar charts.
Users can choose the algorithm, start the sorting, and reset the array.
3. Binary Search Visualization
Visualizes the binary search algorithm on a sorted array.
Highlights the search range, middle element, and target element.
Users can input the target value and watch the search process.
4. Graph Traversal (BFS/DFS) Visualization
Implements both Breadth-First Search (BFS) and Depth-First Search (DFS) on a dynamically generated graph.
Highlights the traversal path and visited nodes.
Users can start BFS or DFS and reset the graph.
5. Linked List Operations Visualization
Visualizes basic singly linked list operations:
Add node to the start or end
Remove node from the start or end
Reverse the list
Shows real-time changes with interactive controls.
Technologies Used
HTML5: Structure of the web pages.
CSS3 (Bootstrap): Styling and layout for responsive design.
JavaScript: Implements algorithm logic and interactivity.
Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/algorithm-visualizer.git
Navigate to the project directory:

bash
Copy code
cd algorithm-visualizer
Open index.html in your web browser to view the project locally:

bash
Copy code
open index.html
Project Structure
graphql
Copy code
algorithm-visualizer/
├── css/
│   ├── main.css             # Global styles for the index page
│   ├── nqueens.css          # Styles for the N-Queens visualization
│   ├── sorting.css          # Styles for the Sorting Algorithms visualization
│   ├── binarySearch.css     # Styles for the Binary Search visualization
│   ├── graphTraversal.css   # Styles for the Graph Traversal visualization
│   ├── linkedList.css       # Styles for the Linked List visualization
├── js/
│   ├── nqueens.js           # N-Queens algorithm logic
│   ├── sorting.js           # Sorting algorithms logic
│   ├── binarySearch.js      # Binary Search algorithm logic
│   ├── graphTraversal.js    # BFS and DFS graph traversal logic
│   ├── linkedList.js        # Linked List operations logic
├── index.html               # Main landing page for algorithm selection
├── nqueens.html             # N-Queens visualization page
├── sorting.html             # Sorting algorithms visualization page
├── binarySearch.html        # Binary Search visualization page
├── graphTraversal.html      # Graph Traversal visualization page
├── linkedList.html          # Linked List visualization page
How to Use
Index Page: The main page contains links to individual algorithm visualizations.
N-Queens Visualization: Click on "N-Queens" to start visualizing the N-Queens problem.
Sorting Algorithms: Choose from Bubble Sort, Merge Sort, or Quick Sort and watch the sorting process.
Binary Search: Input a target value and observe how binary search narrows down the search range.
Graph Traversal: Choose BFS or DFS to traverse through a dynamically generated graph.
Linked List Operations: Perform operations like adding/removing nodes and reversing the linked list.
Screenshots
Feature	Screenshot
Index Page	
N-Queens Visualization	
Sorting Visualization	
Binary Search Visualization	
Graph Traversal Visualization	
Linked List Visualization	
Future Enhancements
Add more algorithms like Dijkstra’s, Prim's, and Kruskal’s.
Improve user customization options (e.g., array size, speed control).
Add real-time performance and complexity analysis.
License
This project is licensed under the MIT License.

Contact
Feel free to reach out for collaboration or questions!

Rishabh Jain
Email: Rishabhjain1922@gmail.com
