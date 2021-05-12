
function createWorld(rows, columns) {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    for (let i = 0; i < 40; i++) {
        let tableRow = document.createElement('table');
        for (let j = 0; j < 40; j++){
            let cell = document.createElement('td');

            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow);
    }
    world.appendChild(table);
}

window.onload = () => {
    createWorld();
};