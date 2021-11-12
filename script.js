const gridSize = 16 * 16;
const gridContainer = document.getElementById('grid_container');
for(let i = 0; i < gridSize; i++){
    const newDiv = document.createElement('div');
    newDiv.className = 'grid_child';
    gridContainer.appendChild(newDiv);
}
