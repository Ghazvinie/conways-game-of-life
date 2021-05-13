const rows = 40;
const columns = 40;

// World arrays
let currentGeneration = [];
let nextGeneration = [];

// Initialise array representation of world for current and next generations
(function worldArray() {
    for (let i = 0; i < rows; i++) {
        currentGeneration[i] = new Array(rows);
        nextGeneration[i] = new Array(rows);
        for (let j = 0; j < columns; j++) {
            currentGeneration[i][j] = 0;
            nextGeneration[i][j] = 0;
        }
    }
})();

//Create world/table
function createWorld() {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    for (let i = 0; i < rows; i++) {
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

// Click initial live cells
function startClick(event) {
    const x = this.id.split('_')[0];
    const y = this.id.split('_')[1];

    if (this.className === 'alive') {
        this.setAttribute('class', 'dead');
        currentGeneration[x][y] = 0;
        console.log(x, y)

    } else {
        this.setAttribute('class', 'alive');
        currentGeneration[x][y] = 1;
        console.log(x, y)
        console.log(currentGeneration[x][y]);
    }
}

function getNeighboursCount(x, y) {

    // Top Left
    if (x - 1 < 0 && y - 1 < 0) {
    return [
                                       [currentGeneration[x][y + 1]],
        [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
    ].filter(cell => cell[0] === 1).length;
}

    // Top Right
    if (x -1 < 0 && y + 1 > columns -1) {
        return [
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Bottom Left
    if (x + 1 > rows -1 && y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
                                           [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Bottom Right
    if (x + 1 > rows - 1 && y + 1 > columns - 1) {
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]],
            [currentGeneration[x][y - 1]],
        ].filter(cell => cell[0] === 1).length;
    }

    // Top 
    if (x - 1 < 0) {
        return [
            [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Bottom 
    if (x + 1 > rows -1) {
        return [
            [currentGeneration[x - 1][y - 1]],    [currentGeneration[x -1][y]], [currentGeneration[x -1 ][y + 1]],
            [currentGeneration[x][y - 1]],                                      [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Right
    if (y + 1 > columns - 1){
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x -1 ][y]],
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Left
    if (y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x -1 ][y + 1]],
                                           [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }

    // Middle
    return [
        [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
        [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
        [currentGeneration[x + 1][y + 1]],[currentGeneration[x + 1][y]],  [currentGeneration[x + 1][y + 1]]
    ].filter(cell => cell[0] === 1).length;
}

window.onload = () => {
    createWorld();
};








