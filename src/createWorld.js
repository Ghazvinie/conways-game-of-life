import startClick from './startClick.js';

export default function createWorld(rows, columns) {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    for (let i = 0; i < 40; i++) {
        let tableRow = document.createElement('table');
        for (let j = 0; j < 40; j++) {
            let cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', startClick);

            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow);
    }
    world.appendChild(table);
}