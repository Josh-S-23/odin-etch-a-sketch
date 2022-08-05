const container = document.querySelector('.container');

let rows = 16;
let columns = 16;

for (let i = 0; i < rows; i++) {
    for (let x = 0; x < columns; x++) {
        const grid = document.createElement('grid');
        grid.classList.add('grid');
        grid.setAttribute('style', 'background: white; border: solid; border-width: 2.5px; transition-duration: 0.2s;')

        container.appendChild(grid);

        grid.addEventListener('mouseover', () => {
            grid.style.background = 'grey';
        })
    }
}













