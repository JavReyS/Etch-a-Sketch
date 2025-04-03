
const grid = () => {
    const container = document.querySelector('.gridSquareDiv');
    for(let i = 0; i<256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "width: 30px; height: 30px; border: 2px solid #eee");
        container.appendChild(square);
    }
}

grid();
