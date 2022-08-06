const container = document.querySelector('.container');
const gridSize = document.querySelector('#gridSize');

let rows;
let columns;
let msg;

for (let i = 0; i < 16; i++) {
    for (let x = 0; x < 16; x++) {
        const grid = document.createElement('grid');
        grid.classList.add('grid');
        container.setAttribute('style', 'display: grid; gap: 1px; margin-top: 65px; justify-content: center; grid-template-columns: repeat(16, 50px);');
        grid.setAttribute('style', 'background: white; border: solid; border-width: 2.5px; transition-duration: 0.2s;');

        container.appendChild(grid);

        grid.addEventListener('mouseover', () => {
            grid.style.background = 'grey';
        });
    }
}

function gridSizeBtn() {

    let i = 1;

    while (i != 'stop') {
        let msg = prompt('please enter the number of squares per side for the new grid');

        if (msg > 100) {
            alert('Enter a number less than 100');
            continue;
        }

        if (msg == null) {
            break;
        }

        if (msg == 0) {
            alert('Grid cannot have a value of 0');
        }

        if (msg > 0 && msg <= 100) {

            container.textContent = '';

            columns = msg;
            rows = msg;

            for (let i = 0; i < rows; i++) {
                for (let x = 0; x < columns; x++) {
                    const grid = document.createElement('grid');
                    grid.classList.add('grid');
                    container.setAttribute('style', 'display: grid; gap: 1px; margin-top: 65px; justify-content: center;');
                    container.style.gridTemplateColumns = "repeat(" + msg + ", 50px)";
                    grid.setAttribute('style', 'background: white; border: solid; border-width: 2.5px; transition-duration: 0.2s;');

                    container.appendChild(grid);

                    grid.addEventListener('mouseover', () => {
                        grid.style.background = 'grey';
                    });
                }
            }
            break;
        }
    }
}



















