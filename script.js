function createGrid(row) {
  const container = document.getElementById("container");
  container.style.width = `${20 * row}px`;
  container.style.height = `${20 * row}px`;
  let isClicked = false;
  container.innerHTML = "";

  for (let i = 0; i < row * row; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.classList.add("painted");
    });
    container.appendChild(square);
  }
}

function readInput() {
  const grid = prompt("Number of grids (Less than 100)");
  createGrid(parseInt(grid));
}
