const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('reset');

let running = false;
startButton.addEventListener('click', () => {
    if (!running) {
        life();
        running = !running;
    } else {
        stop();
        running = !running;
    }
});

resetButton.addEventListener('click', resetWorld);

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

function resetWorld() {
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        cell = document.getElementById(`${rowIdx}_${cellIdx}`);
        cell.setAttribute('class', 'dead');
        currentGeneration[rowIdx][cellIdx] = 0;
        nextGeneration[rowIdx][cellIdx] = 0;
    }));
    stop();
}

//Create world/table
function createWorld() {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    currentGeneration.map((row, rowIdx) => {
        let tableRow = document.createElement('table');

        row.map((cell, cellIdx) => {
            cell = document.createElement('td');
            cell.setAttribute('id', `${rowIdx}_${cellIdx}`);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', startClick);
    
            tableRow.appendChild(cell);
        });
        table.appendChild(tableRow);
    });
    world.appendChild(table);
}

// Click initial live cells
function startClick(event) {
    const x = this.id.split('_')[0];
    const y = this.id.split('_')[1];

    if (this.className === 'alive') {
        this.setAttribute('class', 'dead');
        currentGeneration[x][y] = 0;
    } else {
        this.setAttribute('class', 'alive');
        currentGeneration[x][y] = 1;
    }
}

function getNeighboursCount(x, y) {

    // Top Left
    if (x - 1 < 0 && y - 1 < 0) {
    return [
                                       [currentGeneration[x][y + 1]],
        [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
       ].filter(cell => cell[0] === 1).length;
    } else

    // Top Right
    if (x -1 < 0 && y + 1 > columns -1) {
        return [
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Bottom Left
    if (x + 1 > rows -1 && y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
                                           [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Bottom Right
    if (x + 1 > rows - 1 && y + 1 > columns - 1) {
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]],
            [currentGeneration[x][y - 1]],
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Top 
    if (x - 1 < 0) {
        return [
            [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Bottom 
    if (x + 1 > rows -1) {
        return [
            [currentGeneration[x - 1][y - 1]],    [currentGeneration[x -1][y]], [currentGeneration[x -1 ][y + 1]],
            [currentGeneration[x][y - 1]],                                      [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Right
    if (y + 1 > columns - 1){
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x -1 ][y]],
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Left
    if (y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x -1 ][y + 1]],
                                           [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else {
    // Middle
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
            [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y -1]],[currentGeneration[x + 1][y]],   [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }
}

function createNext(){
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        let liveNeighbours = getNeighboursCount(rowIdx, cellIdx);
            if ((liveNeighbours < 2 || liveNeighbours > 3) && currentGeneration[rowIdx][cellIdx] === 1){
                nextGeneration[rowIdx][cellIdx] = 0;
            } else if (liveNeighbours === 3 && currentGeneration[rowIdx][cellIdx] === 0) {
                nextGeneration[rowIdx][cellIdx] = 1;
            } else {
                nextGeneration[rowIdx][cellIdx] = currentGeneration[rowIdx][cellIdx];
            }
    }));
}

function updateCurrent(){
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        currentGeneration[rowIdx][cellIdx] = nextGeneration[rowIdx][cellIdx];
        nextGeneration[rowIdx][cellIdx] = 0;
    }));
}

function updateWorld() {
    let cell = '';
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        cell = document.getElementById(`${rowIdx}_${cellIdx}`);
            if (currentGeneration[rowIdx][cellIdx] === 1){
                cell.setAttribute('class', 'alive');
            } else if (currentGeneration[rowIdx][cellIdx] === 0){
                cell.setAttribute('class', 'dead');
            }
    }));
}

let interval;
function life(){
    interval = setInterval(() => {
        createNext();
        updateCurrent();
        updateWorld();
    },100);
}

function stop () {
    clearInterval(interval);
}

window.onload = () => {
    createWorld();
};