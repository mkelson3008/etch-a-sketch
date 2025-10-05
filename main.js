let mainContainer = document.querySelector(".mainContainer")
for (let i = 0; i < 32; i++) {
    const div = document.createElement("div");
    if (i % 2 === 0) {
        div.classList.toggle("boxTypeOne");
    }
    else {
        div.classList.toggle("boxTypeTwo");
    }
    mainContainer.appendChild(div);
}