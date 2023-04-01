const container = document.querySelector('#container');

const square = document.createElement('div');
square.className = 'square';

const rows = document.getElementsByClassName('row');

for (let row = 1; row <= 16; row++) {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        document.querySelector('#row' + row).appendChild(square);
    }
}