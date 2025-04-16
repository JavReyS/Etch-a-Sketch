let currentMode = "black";
const blackBtn = document.querySelector('.black');
const randomBtn = document.querySelector('.random');
blackBtn.style.display = 'none';

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
            square.style.backgroundColor = getColor(currentMode);
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

const randomColor = () => {
    randomBtn.addEventListener('click', () => {
        currentMode = "random";
        randomBtn.style.display = 'none';
        blackBtn.style.display = 'block';
    });
}

const blackColor = () => {
    blackBtn.addEventListener('click', () => {
        currentMode = "black";
        blackBtn.style.display = 'none';
        randomBtn.style.display = 'block';
    });
}

function getColor(currentMode) {
    if(currentMode == "black")
        color = "black";
    else if(currentMode == "random")
        color = generateRandomColor();
    return color;
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


createGrid(16);
resize();
randomColor();
blackColor();
