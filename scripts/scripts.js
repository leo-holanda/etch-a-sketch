function fillGrid(squarePerSide){

    let squareSize = ((599 / squarePerSide)) + 'px';
    let squareQuantity = squarePerSide ** 2;

    const grid = document.querySelector('#grid');
    for (let i = 0; i < squareQuantity; i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.style.height = squareSize;
        square.style.width = squareSize;
        square.addEventListener('mouseenter',changeColor);
        grid.appendChild(square);    
    }
}

function getValue() {
    let inputValue = document.querySelector('#textInput').value;
    if(inputValue < 1 || inputValue > 64 || isNaN(inputValue)) {
        alert("Please type a number between 1 and 64!")
        cleanInput();
    }
    else {
        startGrid(inputValue);
    }
}

function cleanInput() {
    let inputValue = document.querySelector('#textInput').value = '';
}

function startGrid(inputValue) {
    cleanGrid();
    fillGrid(inputValue);
}

function cleanGrid() {
    const grid = document.querySelectorAll('.square').forEach(function(square){
        square.remove();
    })
    cleanInput();
}

function getRandomColor() {
    let hexCharacthers = '0123456789ABCDEF';
    let hexColor = '#';

    for(let i = 0; i < 6; i++) {
        hexColor += hexCharacthers[[Math.floor(Math.random() * 16)]];
    }   

    return hexColor;
}

function changeColor() {
    if(event.target.style.backgroundColor == ''){
        event.target.style.backgroundColor = getRandomColor();
    }
}

document.querySelector('#inputButton').addEventListener('click', getValue);
document.querySelector('#cleanButton').addEventListener('click', cleanGrid);