const gridSize = 16*16;
const gridContainer = document.getElementById('grid_container');
for(let i = 0; i < gridSize; i++){
    const newDiv = document.createElement('div');
    newDiv.className = 'grid_child';
    gridContainer.appendChild(newDiv);
}

const gridChild = document.querySelectorAll('.grid_child');
gridChild.forEach(child => {
    child.addEventListener("mouseover", function(){
        child.classList.add('passed');
    })
})
