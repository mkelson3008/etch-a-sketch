// Set up the grid

function createGrid(gridSize = 32) {
    for (let i = 0; i < gridSize; i++) {
        let mainContainer = document.querySelector(".mainContainer")
        const div = document.createElement("div");
        div.classList.toggle("box");
        mainContainer.appendChild(div);
    }

    addHover();
}


// Create the hovering effect expected when interacting with grid
function addHover() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.classList.add("hoveringColor");
        });
    });

}

function removeGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    });    
}

createGrid();
const gridSizeBtn = document.querySelector(".gridSizeBtn");
const maxSize = 100;
gridSizeBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter a new size", "64"));

    if (size > maxSize){
        alert("Size cannot exceed 100.");
    }
    else {
        removeGrid();
        createGrid(size);
    }
})
