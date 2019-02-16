function fillGrid(squarePerSide){

    let squareSize = ((599 / squarePerSide) -0.2) + 'px';
    let squareQuantity = squarePerSide ** 2;

    const grid = document.querySelector('#grid');
    for (let i = 0; i < squareQuantity; i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.style.height = squareSize;
        square.style.width = squareSize;
        grid.appendChild(square);    
    }
}

function getValue() {
    let inputValue = document.querySelector('#textInput').value;
    fillGrid(inputValue);
}

document.querySelector('#inputButton').addEventListener('click', getValue);