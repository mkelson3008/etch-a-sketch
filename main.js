// Set up the grid
let opacityValue;
function createGrid(gridSize = 32) {
    for (let i = 0; i < gridSize; i++) {
        let mainContainer = document.querySelector(".mainContainer")
        const div = document.createElement("div");
        div.classList.toggle("box");
        div.dataset.opacity = .0;
        mainContainer.appendChild(div);
    }

    addHover();
}


// Create the hovering effect expected when interacting with grid
function addHover() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            colorValues = generateColor(box.dataset.opacity);
            box.style.backgroundColor = colorValues[1];
            box.dataset.opacity = colorValues[0];
        });
    });

}

function removeGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    });    
}

function getRandomInt(max = 255) {
    return Math.floor(Math.random() * max);
}

function generateColor(currentOpacity) {
    let r = getRandomInt();
    let g = getRandomInt();
    let b = getRandomInt();
    let setOpacity = parseFloat(currentOpacity) + .1;
    let color = `rgba(${r}, ${g}, ${b}, ${setOpacity})`;

    let returnValues = [setOpacity, color];
    return returnValues;
}



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
