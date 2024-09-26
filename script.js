function createGrid(row) {
  const container = document.getElementById("container");
  container.style.width = `${30 * row}px`; 
  container.style.height = `${30 * row}px`; 
  container.innerHTML=''
  for (let i = 0; i < row * row; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function readInput() {
  const grid = prompt("Number of grids Lessthan 100");
  createGrid(parseInt(grid));
}
