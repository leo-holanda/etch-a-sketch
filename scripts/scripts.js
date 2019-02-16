function fillGrid(squarePerSide){

    let squareSize = ((599 / squarePerSide) -0.2) + 'px';
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
    cleanGrid();
    fillGrid(inputValue);
}

function cleanGrid() {
    const grid = document.querySelectorAll('.square').forEach(function(square){
        square.remove();
    })
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