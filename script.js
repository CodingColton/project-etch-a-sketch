const container = document.querySelector('#container');


function makeGrid(size) {
    for (let i = 1; i <= size; i++) {
        const rowDiv = document.createElement('div')
        rowDiv.id = 'row' + i;
        rowDiv.className = 'row';
        document.querySelector('#container').appendChild(rowDiv);
    }

    for (let row = 1; row <= size; row++) {
        for (let i = 1; i <= size; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseover', () => {
            square.className = 'squareColor';
        });
        document.querySelector('#row' + row).appendChild(square);
        }
    }
}


const btn = document.querySelector('#btn-change-grid');
btn.addEventListener('click', () => {
    let size = prompt('What do you want the grid size to be?');
    if (size <= 100) {
        let allSquares = document.querySelectorAll('.square').forEach(e => e.remove());
        let allColorSquares = document.querySelectorAll('.squareColor').forEach(e => e.remove());
        let allRows = document.querySelectorAll('.row').forEach(e => e.remove());
        makeGrid(size);
    }
    else {
        let allSquares = document.querySelectorAll('.square').forEach(e => e.remove());
        let allColorSquares = document.querySelectorAll('.squareColor').forEach(e => e.remove());
        let allRows = document.querySelectorAll('.row').forEach(e => e.remove());
        makeGrid(16);
    }
});

