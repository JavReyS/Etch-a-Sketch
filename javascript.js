
const createGrid = (size) => {
    const container = document.querySelector('.gridSquareDiv');
    container.innerHTML = '';
    const squareSize = 500/size; //sketchpad always measures 500px*500px
    for(let i = 0; i<(size*size); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", "box-sizing: border-box; width:" +squareSize+ 
            "px; height:" +squareSize+ "px; border: 1px solid #eee");
        square.addEventListener('mouseenter', function () {
            square.style.backgroundColor = "black";
        })
        container.appendChild(square);
    }
}

const resize = () => {
    const resizeBtn = document.querySelector('.resize');
    resizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (max 100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }
    createGrid(newSize);
  });
}


createGrid(16);
resize();
