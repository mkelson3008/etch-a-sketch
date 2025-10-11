// Set up the grid
for (let i = 0; i < 32; i++) {
    let mainContainer = document.querySelector(".mainContainer")
    const div = document.createElement("div");
    div.classList.toggle("box");
    mainContainer.appendChild(div);
}

// Create the hovering effect expected when interacting with grid
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.classList.add("hoveringColor");
    });
});