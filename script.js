let gridSize = 16;
const gridContainer = document.getElementById('grid_container');
const createGrid = () => {
    gridContainer.style.setProperty('--grid-size', gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'grid_child';
        gridContainer.appendChild(newDiv);
    }
    const gridChild = document.querySelectorAll('.grid_child');
    let counter = 90;
    gridChild.forEach(child => {
        child.addEventListener("mouseover", function () {
            counter -= 1;
            child.style.backgroundColor = `hsl(300,76%,${counter}%)`;
        });
    });
}
createGrid();
const clearBtn = document.getElementById('clear_btn');
clearBtn.addEventListener('click', () => {
    let gridString = prompt("How many squares per side would you like? (max 100)");
    gridSize = parseInt(gridString);
    if (gridSize > 100) {
        alert("You entered a number greater than 100 so grid size has been set to 100 by 100.");
        gridSize = 100;
    }
    if(gridSize < 1){
        alert("You entered a number less than 1, here's a square :)")
        gridSize = 1;
    }
    gridContainer.innerHTML = '';
    createGrid();
});